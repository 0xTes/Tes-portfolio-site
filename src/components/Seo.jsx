import { Helmet } from "react-helmet-async";

import { absoluteUrl } from "../lib/site";

const DEFAULT_TITLE =
  "Teslim Digital | AI Automation, Digital Transformation & Strategic Websites";
const DEFAULT_DESCRIPTION =
  "Teslim Digital helps growing businesses remove bottlenecks with strategic websites, intelligent systems, and practical AI automation.";

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  type = "website",
  image = "/og-image.png",
  imageAlt = "Teslim Digital - strategic websites, systems, and AI automation",
}) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Teslim Digital" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}
