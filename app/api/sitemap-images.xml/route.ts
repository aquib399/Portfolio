import { portfolio } from "@/data/portfolio";
import { SITE_URL } from "@/lib/constant";

export const dynamic = "force-static";

// Generate once at build time, cache in memory
const generateImageSitemapXml = (): string => {
  const images: string[] = [];

  // Add OG image
  images.push("/overview/og-cover.png");

  // Add personal media
  if (portfolio.personal.media) {
    portfolio.personal.media.portrait?.forEach((media) => {
      if (media.url) images.push(media.url);
    });
    portfolio.personal.media.landscape?.forEach((media) => {
      if (media.url) images.push(media.url);
    });
  }

  // Add skill category images
  portfolio.skillCategory?.forEach((skill) => {
    if (skill.media?.url) images.push(skill.media.url);
  });

  // Add education images
  portfolio.education?.forEach((edu) => {
    if (edu.media?.url) images.push(edu.media.url);
  });

  // Add project images
  portfolio.project?.forEach((proj) => {
    proj.media?.forEach((media) => {
      if (media.url) images.push(media.url);
    });
  });

  // Remove duplicates
  const uniqueImages = Array.from(new Set(images));

  // Generate XML
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${uniqueImages
  .map((image) => {
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
    return `  <url>
    <loc>${SITE_URL}</loc>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
    </image:image>
  </url>`;
  })
  .join("\n")}
</urlset>`;
};

// Cache the generated XML
let cachedXml: string | null = null;

export async function GET() {
  // On first call (build time), generate and cache
  if (!cachedXml) {
    cachedXml = generateImageSitemapXml();
  }

  return new Response(cachedXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=31536000, immutable"
    }
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
