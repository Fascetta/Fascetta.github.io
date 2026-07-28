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
} as const;
