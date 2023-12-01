"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[59rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image className={`h-24 w-24 rounded-full object-cover
                        border-[0.35rem] border-white shadow-xl`}
                   width={192} height={192} quality={95}  src={'/profile-pic.png'} priority={true} alt={'profile-pic'}/>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{type:'spring',delay:0.2,stiffness:130, bounce:0.6,duration:0.9}}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1 className={`text-center mt-4 px-4 mb-10 text-2xl sm:text-4xl
                               font-medium !leading-[1.5]`}
                 initial={{opacity:0,y:200}}
                 animate={{opacity:1,y:0}}
      >
                    <span className={`font-bold`}>Hello,I'm Qalbe Mehdi.
                    </span>I'm a{" "} <span className={`font-bold`}>full-stack developer </span>
        with {" "} <span className={`font-bold`}>3 years</span> of experience. I
        enjoy building <span className={`italic`}>sites & apps</span>
        . My focus is{" "}
        <span className={`underline underline-offset-[6.5px]`}>React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a href={`https://drive.google.com/file/d/1Ic9wMS00003_I2lB37wdDGKZYUxdAE_1/view?usp=sharing`} target={'_blank'} className={`
                group
                bg-white
                border-white cursor-pointer text-black px-7 py-3
                flex items-center gap-2 rounded-full hover:scale-110 transition`}>
          Download Resume <HiDownload className={`group-hover:scale-105 group-hover:opacity-60`}/>
        </a>
        <Link className={`p-4 dark:bg-gray-900/30 hover:scale-[1.15] hover:text-gray-700 transition border-[1px] border-gray-300/40 bg-white rounded-full border-gray-300`}
              href={`https://www.linkedin.com/in/qalbemehdi/`}>
          <BsLinkedin/>
        </Link>
        <Link className={`p-4 dark:bg-gray-900/30 hover:scale-[1.15] hover:text-gray-700 transition flex items-center justify-center border-[1px] text-[1.35rem] border-gray-300/40 bg-white rounded-full border-gray-300`}
              href={`https://www.github.com/qalbemehdi/`}>
          <FaGithubSquare/>
        </Link>
      </motion.div>
    </section>
  );
}
