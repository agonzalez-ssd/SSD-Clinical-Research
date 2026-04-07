import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
}: SEOProps) {
  const siteTitle = "Southern Skies Clinical Research";
  const fullTitle = `${title} | ${siteTitle}`;
  const baseUrl = "https://southernskiesresearch.com";
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
