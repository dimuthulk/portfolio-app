import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // '*' කියන්නේ හැම search engine bot කෙනෙක්ටම අවසර දෙනවා කියන එක
      allow: "/",
    },
    sitemap: "https://dimuthulk.vercel.app/sitemap.xml",
  };
}
