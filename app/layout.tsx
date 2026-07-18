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
    description: "Explore my design and development projects.",
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
      </body>
    </html>
  );
}
