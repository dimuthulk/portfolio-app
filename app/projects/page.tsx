import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description:
    "View the diverse portfolio of Dimuthu Rathnayaka, featuring full-stack Next.js applications, commercial brand identity designs, marketing materials, and premium creative assets.",
  keywords: [
    "Design Portfolio",
    "Web Development Projects",
    "Next.js Apps",
    "Logo Design",
    "Marketing Flyers",
    "UI/UX Design",
  ],
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-12 py-10 max-w-5xl mx-auto">
      <Projects />
    </main>
  );
}
