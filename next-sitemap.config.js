/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aquibalam.tech";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${siteUrl}/api/sitemap-images.xml`]
  },
  changefreq: "yearly",
  sitemapSize: 7000,
  generateIndexSitemap: true,
  priority: 1
};
