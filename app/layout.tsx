import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { ThemeProvider } from "next-themes";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
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
      className={figtree.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-[var(--font-figtree)] relative min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <BackgroundAnimation />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
