"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-3">
        <Link href={"/"}><div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-white" />
          <span className="font-semibold text-white">Limitless Legal</span>
        </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="#process" className="hover:text-white transition">
            Process
          </Link>
          <Link href="#what-we-do" className="hover:text-white transition">
            What we do
          </Link>
          <Link href="#benefits" className="hover:text-white transition">
            Benefits
          </Link>
          <Link href="#pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>


        <Link
          href="#contact"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition"
        >
          Get in touch ↗
        </Link>
      </div>
    </nav>
  );
}
