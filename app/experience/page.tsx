import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Discover the professional journey of Dimuthu Rathnayaka. Over 9 years of experience in Art Direction, brand identity design, and freelance web development on platforms like Fiverr and Freelancer.com.",
  keywords: [
    "Art Director Experience",
    "Freelance Graphic Designer",
    "Fiverr Freelancer",
    "Brand Identity Design",
    "Next.js Developer Experience",
  ],
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 min-h-screen pt-10">
      <div className="animate-pulse-fade-in">
        <Experience />
      </div>
    </main>
  );
}
