import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const reckless = localFont({
  src: [
    {
      path: "./fonts/RecklessNeue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/RecklessNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/RecklessNeue-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/RecklessNeue-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-reckless",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dimuthulk.vercel.app"),
  title: {
    template: "%s | Dimuthu Rathnayaka",
    default: "Dimuthu Rathnayaka | Art Director & Developer",
  },
  description:
    "Portfolio of Dimuthu Rathnayaka, an Electronics and Computer Science undergraduate specializing in Next.js development and creative graphic design with 9+ years of industry experience.",
  keywords: [
    "Graphic Designer",
    "Art Director",
    "Next.js Developer",
    "Electronics and Computer Science",
    "Freelancer",
    "Sri Lanka Rugby",
    "University of Kelaniya",
    "Agrabodhi College",
    "Wanela Maha Viddayalaya",
  ],
  openGraph: {
    title: "Dimuthu Rathnayaka | Portfolio",
    description:
      "Art Director and Full-Stack Developer crafting visually powerful designs and modern web applications.",
    url: "https://dimuthulk.vercel.app/",
    siteName: "Dimuthu Rathnayaka Portfolio",
    images: [
      {
        url: "https://dimuthulk.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "icfJmBkWOPHyTTLp-Xl8jU7Gt2eBP1ciZ0Wy7bq169s",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${reckless.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      {/* font-[var(--font-figtree)] වෙනුවට font-sans දාන්න */}
      <body className="font-sans relative min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <BackgroundAnimation />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
        <SpeedInsights />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dimuthu Rathnayaka",
              alternateName: ["dimuthulk", "Dimuthu Lakmal Rathnayaka"],
              url: "https://dimuthulk.vercel.app",
              jobTitle: "Full-Stack Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Kelaniya",
              },
              knowsAbout: [
                "Electronics and computer science",
                "Software Development",
                "Next.js",
                "React",
              ],
              sameAs: [
                "https://huggingface.co/dimuthulk",
                "https://github.com/dimuthulk",
                "https://www.linkedin.com/in/dimuthu-rathnayaka/",
                "https://www.facebook.com/dimuthulkonline",
                "https://x.com/DimuthuLKR",
                "https://medium.com/@dimuthulk",
                "https://www.fiverr.com/s/wkXYGw8",
                "https://www.instagram.com/_dimuthu_lk_/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
