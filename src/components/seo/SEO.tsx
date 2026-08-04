import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  schema?: Record<string, any>;
}

export function SEO({ title, description, keywords, path, schema }: SEOProps) {
  const domain = 'https://thepatternscompany.com';
  const url = path ? `${domain}${path}` : domain;
  
  // Format the title to always include the brand name
  const fullTitle = title === 'The Patterns Company' ? title : `${title} | The Patterns Company`;

  // Organization Schema (Baseline for GEO/AEO/LLM context)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Patterns Company",
    "url": domain,
    "logo": `${domain}/logo.png`,
    "description": "The Patterns Company provides enterprise AI solutions, foundational models, and data intelligence platforms.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9392557785",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data / JSON-LD for AEO and LLM robustness */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Page Specific Schema (if provided) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            ...schema
          })}
        </script>
      )}
    </Helmet>
  );
}
