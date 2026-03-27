import React from 'react';
import Link from 'next/link';

type Props = {
  name?: string;
  url: string;
  issuer?: string;
};

const CertificateCard = ({ name = 'View Certificate', url, issuer }: Props) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full max-w-sm items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-accent/40 hover:bg-white/10 hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Glossy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Animated Icon Container */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-2xl text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20">
        <span className="relative z-10">📜</span>
        {/* Pulse effect behind icon */}
        <span className="absolute inset-0 max-h-full max-w-full animate-ping rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 duration-1000" />
      </div>

      <div className="relative z-10 flex flex-col">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400 group-hover:text-accent/80">
          Professional Certification
        </span>
        <h4 className="font-semibold text-slate-200 transition-colors group-hover:text-white">
          {name}
        </h4>
        {issuer && (
          <span className="text-xs text-slate-500 group-hover:text-slate-400">
            Issued by {issuer}
          </span>
        )}
      </div>

      {/* External Link Arrow */}
      <div className="ml-auto text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </div>
    </Link>
  );
};

export default CertificateCard;
