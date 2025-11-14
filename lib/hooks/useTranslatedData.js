
import { useLanguage } from '@/context/language-context';
import { experiencesData, projectsData, profile } from '@/lib/data';

export function useTranslatedData() {
  const { language } = useLanguage();
  
  return {
    experiences: experiencesData[language] || experiencesData.en,
    projects: projectsData[language] || projectsData.en,
    profile: profile[language] || profile.en
  };
}