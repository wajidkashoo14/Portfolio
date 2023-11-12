"use client";
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
        {`Hey there! I'm Wajid Kashoo, a passionate and results-driven web developer hailing from the picturesque valley of Kashmir. Armed with a`}
        <span className="font-medium"> BCA</span> and{" "}
        <span className="font-medium">MCA</span>
        {` from Kashmir University, my journey into the world of technology began with a formal education, but my true passion ignited when I stepped into the dynamic realm of freelance web development in 2022.
        In the digital landscape, I've found my canvas, and coding has become my brushstroke. With a keen eye for design and a knack for turning ideas into interactive and functional websites, I've been on a mission to elevate online experiences.
         I am always looking to
        learn new technologies. I am currently looking for a`}
        <span className="font-medium"> full-time position</span> as a Frontend
        developer.
      </p>
    </motion.section>
  );
}
