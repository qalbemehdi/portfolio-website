"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">

        From crunching numbers to coding magic! 🚀{" "}
        <span className="font-medium">B.Tech grad</span>,
         turned  <span className="font-medium">full-stack web dev</span>{" "}
         with a passion for problem-solving.
        I <span className="underline">love</span>{" "} the
        feeling of finally figuring out a solution to a problem.
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB,Javascript,Java
        </span>{" "}— my tech playground.
        I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
        Currently on the hunt for a{" "}
        <span className="font-medium">full-time coding adventure</span> as a software
        developer.
      </p>

      <p>

        <span className="italic">When not in code mode</span>, I'm a gaming geek, movie buff, and dog's best friend.
        I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
