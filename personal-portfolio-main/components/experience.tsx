
"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import Timeline from "./timeline";
import { useTranslatedData } from "@/lib/hooks/useTranslatedData";
import { useTranslation } from "@/lib/hooks/useTranslation";

const Experience = () => {
  const { ref } = useSectionInView("experience");
  const { t } = useTranslation();
  const { experiences } = useTranslatedData();
  
  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t('experience.title')}</SectionHeading>
      <Timeline data={experiences} />
    </section>
  );
};

export default Experience;