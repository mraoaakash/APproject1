import React from "react";
import { Helmet } from "react-helmet";

/*
 * Section Authored by:  Ekansh Sharma
 * Commit history absent due to repository issues
 */
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To SPARDUCKS",
  description: "We sell the best Tea for cheap",
  keywords: "Tea, buy Tea, the best Tea",
};

export default Meta;
