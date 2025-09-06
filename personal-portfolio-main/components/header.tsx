
"use client";

import React from "react";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslation } from "@/lib/hooks/useTranslation";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useTranslation();

  return (
    <header className="z-[999] relative">
      {/* ... kode navigasi lainnya ... */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li className="h-3/4 flex items-center justify-center relative" key={link.hash}>
              <a
                className={`flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 ${
                  activeSection === link.name ? "text-gray-950 dark:text-gray-200" : ""
                }`}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t(`nav.${link.name.toLowerCase()}`)}

                {activeSection === link.name && (
                  <span className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}