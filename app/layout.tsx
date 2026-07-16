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
  title: "Dimuthu Rathnayaka",
  description: "Software Engineer Portfolio",
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
