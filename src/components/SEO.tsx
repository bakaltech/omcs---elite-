import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
  schemaMarkup?: Record<string, any>;
}

export function SEO({ 
  title, 
  description = "Ottawa Muslim Community Services (OMCS) offers culturally responsive mental health, family counselling, and community support programs in Ottawa.", 
  canonicalUrl, 
  type = "website",
  image = "https://omcs.ca/assets/Muslim%20girls%20holding%20each%20other%20and%20smiling,%20hero%20image1.jpg",
  schemaMarkup 
}: SEOProps) {

  const siteTitle = "OMCS - Ottawa Muslim Community Services";
  const fullTitle = title ? `${title} | OMCS` : siteTitle;
  const url = canonicalUrl ? `https://omcs.ca${canonicalUrl}` : "https://omcs.ca/";

  // Default Organization Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Ottawa Muslim Community Services",
    "alternateName": "OMCS",
    "url": "https://omcs.ca",
    "logo": "https://omcs.ca/assets/ali.jpg",
    "description": "Providing culturally informed mental health, family counselling, and community support services for Muslims across Ottawa.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    // Include phone if applicable, etc.
  };

  const finalSchema = schemaMarkup ? { ...defaultSchema, ...schemaMarkup } : defaultSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
