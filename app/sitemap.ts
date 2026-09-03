import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cdvrswrld.com";
  const routes = [
    "",
    "/about",
    "/music",
    "/videos",
    "/events",
    "/no-pressure",
    "/sports",
    "/contact",
    "/cdvrswrld",
    "/shop",
    "/archive",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
