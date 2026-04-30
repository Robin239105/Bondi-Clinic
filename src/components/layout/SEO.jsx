import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, image, url }) {
  const siteTitle = "Bondi Skin Clinic | Caring For Every Layer Of Skin For Everyone";
  const fullTitle = title ? `${title} | Bondi Skin Clinic` : siteTitle;
  const siteDescription = "Bondi's premier clinical cosmeceutical clinic. Advanced skin, body, laser, and injectable treatments in Bondi, Australia. Expert care for every layer of skin.";
  const fullDescription = description || siteDescription;
  const siteKeywords = "skin clinic bondi, laser clinic bondi, injectables bondi, dermal fillers bondi, tixel bondi, facial bondi, skin resurfacing bondi";
  const fullKeywords = keywords ? `${keywords}, ${siteKeywords}` : siteKeywords;
  const siteImage = "https://bondiclinic.com.au/images/og-image.jpg";
  const fullImage = image || siteImage;
  const siteUrl = "https://bondiclinic.com.au";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={fullImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}
