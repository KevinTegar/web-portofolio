  
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { useTranslatedData } from "@/lib/hooks/useTranslatedData";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.5);
  const { t } = useTranslation();
  const { projects } = useTranslatedData();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t('projects.title')}</SectionHeading>
      <div>
        {projects.map((project: any, index: any) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
} 