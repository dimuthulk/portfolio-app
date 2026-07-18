import DevTipsClient from "@/components/DevTipsClient";

export const metadata = {
  title: "Dev Tips & Articles",
  description:
    "Read DEV TIPS and tech articles by Dimuthu Rathnayaka. Learn about GitHub licenses, Conventional Commits, Semantic Versioning, Git workflows, and Next.js development.",
  keywords: [
    "Dev Tips",
    "Semantic Versioning",
    "Conventional Commits",
    "GitHub Licenses",
    "Next.js Tips",
    "Software Development",
  ],
};

export default function DevTipsPage() {
  return <DevTipsClient />;
}
