"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 md:pt-24">

      <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-[2rem] bg-brand-200/50 blur-2xl animate-float" />
      <div className="pointer-events-none absolute right-0 top-40 h-56 w-56 rounded-full bg-brand-300/30 blur-3xl animate-float [animation-delay:1.5s]" />

      <div className="container grid items-center gap-14 pb-20 lg:grid-cols-2 lg:pb-32">

        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 font-display text-sm font-semibold text-brand-600"
          >
            IIITN's CP/DSA Club
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-balance font-display text-5xl font-extrabold leading-[1.05] text-ink md:text-6xl"
          >
            Master Coding and DSA{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-300 bg-clip-text text-transparent">
              with DotSlash.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-5 max-w-md text-balance text-lg text-ink/60"
          >
            IIITN's Club for problem-solving and algorithmic thinking.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#roadmap">
                Explore Roadmap <ArrowRight size={16} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/leaderboard">
                <Trophy size={16} /> View Leaderboard
              </Link>
            </Button>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/60 to-brand-400/30 blur-xl" />

          <div className="relative overflow-hidden rounded-2xl border border-ink/5 bg-white p-6 shadow-card">

            <div className="flex items-center justify-between opacity-90 blur-[1.5px]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-ink/60">
                  CP/DSA Profile
                </p>
                <p className="mt-1 font-display text-lg font-bold">Student Name</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-ink/80">Ratings</p>
                <p className="font-display text-xl font-bold text-brand-500">--.--</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 opacity-90 blur-[1.5px]">
              {["Codeforces Rank", "Solved Problems", "Rating Graph", "Leaderboard Rank"].map(
                (label) => (
                  <div key={label} className="rounded-xl bg-brand-50 p-3">
                    <p className="text-[11px] text-ink/80">{label}</p>
                    <p className="font-display text-sm font-bold">----</p>
                  </div>
                )
              )}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-cream-soft/85 backdrop-blur-[1.5px]">
              <Image
                src="/logo-mark.png"
                alt="DotSlash"
                width={346}
                height={301}
                className="h-16 w-auto animate-float drop-shadow-sm"
              />
              <p className="flex items-center gap-1.5 font-display text-xs font-semibold text-ink/50">
                <Lock size={12} /> Profile syncing coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
