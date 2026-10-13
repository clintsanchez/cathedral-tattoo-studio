import type { MetadataRoute } from "next";

// A preview of unapproved drafts: closed to every crawler. Replace at launch.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
