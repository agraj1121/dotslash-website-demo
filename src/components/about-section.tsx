"use client";

import { motion } from "framer-motion";
import { Code2, Users, Target } from "lucide-react";

const POINTS = [
  {
    icon: Code2,
    title: "CP/DSA Roadmap",
    desc: "From arrays to advanced graphs — one topic at a time, in the order that actually builds intuition.",
  },
  {
    icon: Users,
    title: "Built by peers",
    desc: "Run by IIITN students who've been through the grind — for students walking the same path.",
  },
  {
    icon: Target,
    title: "Track real progress",
    desc: "Ratings, solve counts and rank history in one place instead of five different tabs.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-pad py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 font-display text-sm font-semibold text-brand-500">
              About DotSlash Community
            </p>
            <h2 className="text-balance font-display text-3xl font-bold text-ink md:text-4xl">
              A shared ground for everyone chasing better DSA.
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              DotSlash info here...
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl border border-ink/5 bg-white p-6 shadow-card ${
                  i === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <p.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm text-ink/60">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
