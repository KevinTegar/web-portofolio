
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "@/lib/hooks/useTranslation";

export default function About() {
  const { ref } = useSectionInView("about");
  const { t } = useTranslation();

  // Fungsi untuk mengganti tag HTML dalam teks
  const renderHTML = (text: string) => {
    return { __html: text
      .replace(/<strong>(.*?)<\/strong>/g, '<span class="font-medium">$1</span>')
      .replace(/<em>(.*?)<\/em>/g, '<span class="italic">$1</span>') 
    };
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t('about.title')}</SectionHeading>
      <p 
        className="mb-3"
        dangerouslySetInnerHTML={renderHTML(t('about.content'))}
      />
      <p dangerouslySetInnerHTML={renderHTML(t('about.hobby'))} />
    </motion.section>
  );
}