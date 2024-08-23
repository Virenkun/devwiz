"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import ShineBorder from "@/components/magicui/shine-border";
import ShinyButton from "@/components/magicui/shiny-button";
import AppCard from "@/components/AppCard";

export default function Home() {
  return (
    <div className="h-max">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl px-4 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Simplify your workflow with powerful developer tools.{" "}
          <Highlight className="text-black dark:text-white">
            All the utilities you need in one place.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <div className="grid grid-cols-3 gap-12 mx-60">
        {Array.from({ length: 15 }).map((_, i) => (
          <AppCard key={i} />
        ))}
      </div>
    </div>
  );
}
