import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "Sinaaan CK | Full Stack Developer & Automation Enthusiast",
  description:
    "Portfolio of Mohammed Sinan (Sinaaan CK) — showcasing automation, integration, and cloud development projects.",
  keywords: [
    "Full Stack Developer",
    "Automation",
    "n8n",
    "Python Django",
    "Cloud Computing",
    "Integration",
    "AI AgentKit",
  ],
  authors: [{ name: "Mohammed Sinan", url: "https://linkedin.com/in/sinaaanck" }],
  creator: "Sinaaan CK",
  openGraph: {
    title: "Sinaaan CK | Full Stack Developer & Automation Enthusiast",
    description:
      "Portfolio of Mohammed Sinan (Sinaaan CK) — showcasing automation, integration, and cloud development projects.",
    url: "https://sinaaanck.vercel.app",
    siteName: "Sinaaan CK",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        {domain ? (
          <Script
            defer
            data-domain={domain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </head>
      <body className={`${inter.className} bg-background text-textPrimary antialiased`}>
        {children}
      </body>
    </html>
  );
}
