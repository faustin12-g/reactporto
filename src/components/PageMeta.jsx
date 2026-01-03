import { Helmet } from 'react-helmet-async';

export default function PageMeta({ 
  title = 'Faustin Nshimiyimana | Full Stack Developer & UI/UX Designer',
  description = 'Faustin Nshimiyimana - Professional portfolio showcasing innovative web solutions, creative designs, and full-stack development expertise. Specializing in React, Django, and modern web technologies.',
  keywords = 'Faustin Nshimiyimana, full stack developer, UI/UX designer, web development, portfolio, React, Django, developer Rwanda',
  image = 'https://nshimiyimana.me/og-image.jpg',
  url = 'https://nshimiyimana.me',
  type = 'website'
}) {
  // JSON-LD Structured Data for Person
  const personSchema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Faustin Nshimiyimana",
    "url": url,
    "image": image,
    "sameAs": [
      "https://github.com/faustin12-g",
      "https://linkedin.com/in/faustin-nshimiyimana",
      "https://twitter.com/faustin"
    ],
    "jobTitle": "Full Stack Developer & UI/UX Designer",
    "description": "Creative developer specializing in full-stack web development and UI/UX design"
  };

  // JSON-LD for WebSite
  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Faustin Nshimiyimana Portfolio",
    "url": url,
    "creator": {
      "@type": "Person",
      "name": "Faustin Nshimiyimana"
    }
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="charset" content="UTF-8" />
      <meta name="author" content="Faustin Nshimiyimana" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@faustin" />
      
      {/* Google Site Verification (add your code) */}
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
