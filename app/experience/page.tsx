import Experience from "@/components/Experience";

export const metadata = {
  title: "Experience | Dimuthu Rathnayaka",
  description: "My professional journey and experience.",
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
