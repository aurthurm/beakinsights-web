import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Source_Sans_3, Source_Serif_4 } from "next/font/google"
import { CookieNotice } from "@/components/cookie-notice"
import { JsonLd } from "@/components/json-ld"
import { MotionProvider } from "@/components/motion/motion-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/content/site"
import "./globals.css"

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Beak Insights | IT, AI, Informatics & Healthcare Consulting",
    template: "%s",
  },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0B1F44" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: site.name,
    type: "website",
    images: [{ url: "/og/og-home.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/og-home.png"],
  },
  other: {
    "msapplication-TileColor": "#0B1F44",
    "msapplication-config": "/browserconfig.xml",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B1F44",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">
        <MotionProvider>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              logo: `${site.url}/logo-horizontal.png`,
              email: site.email,
              description: site.description,
            }}
          />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-4 focus:py-3"
          >
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
          <CookieNotice />
        </MotionProvider>
      </body>
    </html>
  )
}
