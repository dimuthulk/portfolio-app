import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

// Figtree font එක load කිරීම
const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohit Singh - Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* body එකට figtree font එක apply කිරීම */}
      <body className={`${figtree.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
