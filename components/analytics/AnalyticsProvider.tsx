"use client";
import Script from "next/script";

type Provider = "plausible" | "umami";

interface AnalyticsProviderProps {
  provider?: Provider | null;
}

export function AnalyticsProvider({ provider }: AnalyticsProviderProps) {
  if (!provider) return null;
  if (provider === "plausible") {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    if (!domain) return null;
    return (
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }
  if (provider === "umami") {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    const src = process.env.NEXT_PUBLIC_UMAMI_SRC || "https://umami.is/script.js";
    if (!websiteId) return null;
    return <Script async defer data-website-id={websiteId} src={src} strategy="afterInteractive" />;
  }
  return null;
}
