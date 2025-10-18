declare namespace NodeJS {
  interface ProcessEnv {
    ANALYTICS_PROVIDER?: 'plausible' | 'umami';
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN?: string;
    NEXT_PUBLIC_UMAMI_WEBSITE_ID?: string;
    NEXT_PUBLIC_UMAMI_SRC?: string;
    NEXT_PUBLIC_SITE_URL?: string;
  }
}
