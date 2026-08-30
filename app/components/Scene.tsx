"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Scene({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🎬 CROSSFADE CORE
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);
  const blur = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);

  return (
    <section
      ref={ref}
      id={id}
      data-scroll-section
      className="relative h-screen w-full overflow-visible"
    >
      <motion.div
        style={{
          opacity,
          scale,
          filter: blur,
        }}
        className="relative w-full h-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
