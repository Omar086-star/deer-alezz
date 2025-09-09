import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "حملة دير العز - إعادة الأمل لدير الزور",
    template: "%s | حملة دير العز",
  },
  description:
    "حملة إنسانية شاملة لإعادة إعمار دير الزور وجمع 25 مليون دولار للبنية التحتية والخدمات الأساسية. نعمل في 7 مجالات: البنية التحتية، الأمن، الإسكان، الصحة، التعليم، الأمن الغذائي والخدمات المجتمعية.",
  keywords: [
    "دير الزور",
    "إعادة الإعمار",
    "حملة إنسانية",
    "تبرعات",
    "البنية التحتية",
    "الإسكان",
    "التعليم",
    "الصحة",
    "الأمن الغذائي",
  ],
  authors: [{ name: "حملة دير العز" }],
  creator: "حملة دير العز",
  publisher: "حملة دير العز",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://deir-al-izz.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://deir-al-izz.vercel.app",
    siteName: "حملة دير العز",
    title: "حملة دير العز - إعادة الأمل لدير الزور",
    description: "حملة إنسانية شاملة لإعادة إعمار دير الزور وجمع 5 مليون دولار للبنية التحتية والخدمات الأساسية",
    images: [
      {
        url: "/images/deir-al-izz-banner.jpg",
        width: 1200,
        height: 630,
        alt: "حملة دير العز - إعادة الأمل لدير الزور",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "حملة دير العز - إعادة الأمل لدير الزور",
    description: "حملة إنسانية شاملة لإعادة إعمار دير الزور وجمع 5 مليون دولار للبنية التحتية والخدمات الأساسية",
    images: ["/images/deir-al-izz-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/images/deir-al-izz-logo.jpg" />
        <link rel="apple-touch-icon" href="/images/deir-al-izz-logo.jpg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "حملة دير العز",
              description: "حملة إنسانية شاملة لإعادة إعمار دير الزور",
              url: "https://deir-al-izz.vercel.app",
              logo: "https://deir-al-izz.vercel.app/images/deir-al-izz-logo.jpg",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Arabic",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
