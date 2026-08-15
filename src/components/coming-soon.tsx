"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="flex min-h-[75vh] w-full flex-col items-center justify-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-100 text-brand-500 animate-float">
          <Construction size={34} strokeWidth={1.75} />
        </div>
        <p className="mb-2 font-display text-sm font-semibold text-brand-500">
          {title}
        </p>
        <h1 className="mb-4 text-balance font-display text-4xl font-bold text-ink md:text-5xl">
          Coming Soon...
        </h1>
        <p className="mb-8 max-w-md text-balance text-ink/60">
          {description ??
            "This part of DotSlash is still being built. Check back soon — we're shipping this one fast."}
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
