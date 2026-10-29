function normalizeSiteUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://${value}`;
}

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://fascetta.github.io";

export const siteConfig = {
  name: "Christian Bianchi",
  url: normalizeSiteUrl(resolvedSiteUrl).replace(/\/$/, ""),
  // Bump when content changes; drives the header date and the sitemap.
  lastUpdated: "2026-10-29",
} as const;

export function formatLastUpdated() {
  return new Date(`${siteConfig.lastUpdated}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
