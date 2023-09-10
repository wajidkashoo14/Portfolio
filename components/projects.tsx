"use client"
import React, { useEffect } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Projects() {
  const { ref, inView } = useInView({
    threshold:0.5
  });
  const { setActiveSection, timeOfLastClick  } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}


