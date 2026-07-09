import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
// 1. BackgroundAnimation එක මෙතනට import කරගන්න
import BackgroundAnimation from "@/components/BackgroundAnimation";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
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
    <html lang="en" className={figtree.variable}>
      <body
        className={`${figtree.className} relative min-h-screen antialiased`}
      >
        {/* 2. මුළු application එකටම background එක මෙතනින් සෙට් වෙනවා */}
        <BackgroundAnimation />

        {/* 3. children (පිටු වල content) background එකට උඩින් පේන්න z-index එකක් දෙනවා */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
