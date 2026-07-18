import type { Metadata } from "next";
import Certificates from "@/components/Certificates";

export const metadata: Metadata = {
  title: "Certificates & Education",
  description:
    "Explore the academic background and professional qualifications of Dimuthu Rathnayaka, including undergraduate studies in Electronics and Computer Science at the University of Kelaniya.",
  keywords: [
    "Dimuthu Rathnayaka Certificates",
    "Electronics and Computer Science",
    "University of Kelaniya",
    "Qualifications",
    "Tech Enthusiast",
  ],
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-12 py-10 max-w-5xl mx-auto selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Certificates />
    </main>
  );
}
