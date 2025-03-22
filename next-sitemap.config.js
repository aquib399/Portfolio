/**
 * @type {import('next-sitemap').IConfig}
 */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  changefreq: "monthly",
  generateRobotsTxt: true,
  sitemapSize: Infinity,
  priority: 0.7,
  additionalPaths: async () => [
    {
      loc: "/",
      priority: 1.0,
    },
  ],
};

module.exports = config;
