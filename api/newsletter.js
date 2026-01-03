export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
        merge_fields: {
          FNAME: '',
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({
        success: true,
        message: 'Successfully subscribed to newsletter!',
      });
    }

    if (response.status === 400) {
      if (data.title === 'Member Exists') {
        return res.status(200).json({
          success: true,
          message: 'You are already subscribed!',
        });
      }
      return res.status(400).json({
        success: false,
        error: data.detail || 'Subscription failed',
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Mailchimp subscription failed',
    });
  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error: ' + error.message,
    });
  }
}
