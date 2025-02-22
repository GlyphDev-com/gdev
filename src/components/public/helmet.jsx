import React from "react";
import {Helmet} from "react-helmet";
import PropTypes from "prop-types";

const SEOHelmet = ({
  title,
  description,
  favicon,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard,
  twitterSite,
  twitterTitle,
  twitterDescription,
  twitterImage,
  themeColor,
}) => {
  return (
    <Helmet>
      {/* Title */}
      <title translate="no">{title}</title>

      {/* Favicon with default option */}
      <link
        rel="icon"
        type={favicon ? favicon.split(" ")[0] : "image/svg+xml"}
        href={
          favicon
            ? `${favicon.split(" ")[1]}?v=${new Date().getTime()}`
            : "/icon.svg"
        }
      />

      {/* Meta Description */}
      {description && <meta name="description" content={description} />}

      {/* OpenGraph Tags */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}

      {/* Twitter Card Tags */}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      <meta name="theme-color" content={themeColor}></meta>
    </Helmet>
  );
};

SEOHelmet.propTypes = {
  title: PropTypes.string.isRequired, // Required prop
  description: PropTypes.string, // Optional
  favicon: PropTypes.string, // Optional
  ogTitle: PropTypes.string, // Optional OpenGraph properties
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  ogUrl: PropTypes.string,
  twitterCard: PropTypes.string, // Optional Twitter card properties
  twitterSite: PropTypes.string,
  twitterTitle: PropTypes.string,
  twitterDescription: PropTypes.string,
  twitterImage: PropTypes.string,
};

export default SEOHelmet;