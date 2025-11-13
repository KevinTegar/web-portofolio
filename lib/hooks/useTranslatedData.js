
import { useLanguage } from '@/context/language-context';
import { experiencesData, projectsData } from '@/lib/data';

export function useTranslatedData() {
  const { language } = useLanguage();
  
  return {
    experiences: experiencesData[language] || experiencesData.en,
    projects: projectsData[language] || projectsData.en
  };
}