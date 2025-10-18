import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter, Poppins } from "next/font/google";
import { siteConfig } from "@/site.config";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [{ url: siteConfig.seo.openGraphImage }],
    url: "/",
    siteName: "Sinaaan CK",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.openGraphImage],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <a href="#content" className="skip-link focus:outline-none">Skip to content</a>
        <main id="content" className="container-narrow">
          {children}
        </main>
        <footer className="container-narrow py-12 text-sm text-text-secondary">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} {siteConfig.profile.nickname}. All rights reserved.</div>
            <nav className="flex items-center gap-4">
              <Link className="hover:underline" href="#projects">Projects</Link>
              <Link className="hover:underline" href="#contact">Contact</Link>
              <a className="hover:underline" href="/resume.pdf" download>Resume</a>
              <a className="inline-flex items-center justify-center h-8 w-8 rounded hover:text-text-primary" href={siteConfig.profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center justify-center h-8 w-8 rounded hover:text-text-primary" href={siteConfig.profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </footer>
        <AnalyticsProvider provider={siteConfig.analytics.provider} />
      </body>
    </html>
  );
}
