import Link from "next/link";

export default function DevTipsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 py-20 px-4 flex flex-col items-center font-sans">
      {/* Back Button */}
      <div className="w-full max-w-2xl mb-8">
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 w-fit"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Page Header */}
      <div className="w-full max-w-2xl mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My LinkedIn DEV TIPS
        </h1>
        <p className="text-gray-400 text-lg">
          Sharing my journey and insights on technical problem-solving, version
          control, and best practices.
        </p>
      </div>

      {/* Embedded LinkedIn Post */}
      <div className="w-full max-w-[504px] bg-[#111] rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex justify-center hover:border-gray-600 transition-colors duration-300">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7435942627121864704?collapsed=1"
          height="670"
          width="504"
          frameBorder="0"
          allowFullScreen=""
          title="Embedded LinkedIn post"
          className="bg-white" // LinkedIn iframe usually expects a white background internally
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7438919518053306368?collapsed=1"
          height="670"
          width="504"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
      </div>
    </div>
  );
}
