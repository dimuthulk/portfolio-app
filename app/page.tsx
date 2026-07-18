import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Dimuthu Rathnayaka",
  description:
    "Welcome to the portfolio of Dimuthu Rathnayaka. I am an Art Director and Graphic Designer with over 9 years of experience, and a developer passionate about Next.js, Cloud infrastructure, AI, and Cybersecurity.",
};

export default function Portfolio() {
  return <HomePageClient />;
}
