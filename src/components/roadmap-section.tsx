"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-pad py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <p className="mb-3 font-display text-sm font-semibold text-brand-500">
            The Path Forward
          </p>
          <h2 className="text-balance font-display text-3xl font-bold text-ink md:text-4xl">
            DSA Roadmap
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink/60">
            A topic-by-topic roadmap from arrays to advanced graphs. The
            interactive map lands here.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          id="roadmap-container"
          className="flex min-h-[320px] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-brand-300/50 bg-white/50 p-10 text-center md:min-h-[420px]"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
            <Map size={24} />
          </div>
          <p className="font-display text-lg font-semibold text-ink/70">
            Roadmap Coming Soon...
          </p>
          <p className="max-w-sm text-sm text-ink/45">
            This container is reserved for the DSA roadmap graphic — it&apos;ll
            drop in here once it&apos;s ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
