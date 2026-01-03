import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  try {
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_KEY?.split('-')[1] || 'us13';

    if (!MAILCHIMP_LIST_ID || !MAILCHIMP_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'Server configuration error',
      });
    }

    const mailchimpUrl = `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({
        success: true,
        message: 'Successfully subscribed to newsletter!',
      });
    }

    if (response.status === 400 && data.title === 'Member Exists') {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed!',
      });
    }

    return res.status(400).json({
      success: false,
      error: data.detail || 'Subscription failed',
    });
  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
