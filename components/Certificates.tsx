"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import certificatesData from "@/data/certificates.json";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  url: string;
}

const CertificateCard = ({ data }: { data: CertificateItem }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-white/40 dark:hover:bg-white/10"
    >
      {/* Certificate Image Area */}
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-zinc-900/50 cursor-pointer block"
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
          <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
            <Icon icon="lucide:external-link" className="text-white text-2xl" />
          </div>
        </div>
      </a>

      {/* Details Area */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1 line-clamp-2">
          {data.title}
        </h3>

        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
          {data.issuer}
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          Issued: {data.issueDate}
        </p>

        {/* Verify Button */}
        <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-white/10">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Verify Credential
            <Icon
              icon="heroicons:arrow-top-right-on-square-20-solid"
              className="text-base"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Certificates({ limit }: { limit?: number }) {
  const certificates = certificatesData as CertificateItem[];
  const displayedCertificates = limit
    ? certificates.slice(0, limit)
    : certificates;

  return (
    <section className="w-full py-0">
      {/* Dynamic Header (Same as Projects/Experience) */}
      {limit ? (
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-reckless">
            Licenses & Certifications
          </h2>
          <Link
            href="/certificates"
            className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            See All
            <Icon
              icon="famicons:arrow-redo-outline"
              className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      ) : (
        <div className="mb-8 flex items-center justify-between">
          <div className="inline-block border-b border-gray-900 dark:border-white pb-1">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-reckless">
              All Certifications
            </h2>
          </div>
          <Link
            href="/"
            className="text-lg font-medium text-black dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors tracking-widest"
          >
            .. /
          </Link>
        </div>
      )}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedCertificates.map((cert) => (
          <CertificateCard key={cert.id} data={cert} />
        ))}
      </div>
    </section>
  );
}
