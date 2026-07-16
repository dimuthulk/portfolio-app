import Certificates from "@/components/Certificates";

export const metadata = {
  title: "Certificates | Dimuthu Rathnayaka",
  description: "My licenses and certifications.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-12 py-10 max-w-5xl mx-auto selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Certificates />
    </main>
  );
}
