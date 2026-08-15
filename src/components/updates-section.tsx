"use client";

import { motion } from "framer-motion";
import { Award, Newspaper } from "lucide-react";

function Rail({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex-1">
      <div className="mb-4 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
          <Icon size={17} />
        </div>
        <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      </div>

      <div className="rail-scroll flex gap-4 overflow-x-auto pb-3">
        {[1, 2].map((n) => (
          <div
            key={n}
            className="flex h-40 w-64 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-brand-300/40 bg-white/60 text-center"
          >
            <p className="font-display text-xs font-semibold text-brand-500/70">
              Slot {n}
            </p>
            <p className="text-sm font-medium text-ink/40">Coming Soon...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UpdatesSection() {
  return (
    <section id="updates" className="section-pad bg-cream-deep/40 py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="mb-3 font-display text-sm font-semibold text-brand-500">
            Stay in the loop
          </p>
          <h2 className="text-balance font-display text-3xl font-bold text-ink md:text-4xl">
            Latest Updates
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-8">
          <Rail title="Achievements" icon={Award} />
          <Rail title="News & Updates" icon={Newspaper} />
        </div>
      </div>
    </section>
  );
}
