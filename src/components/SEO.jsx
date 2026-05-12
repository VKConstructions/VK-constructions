import React from "react";
import { useEffect } from "react";

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} | VK Constructions` : "VK Constructions | Chennai Construction Company";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
};

export default SEO;
