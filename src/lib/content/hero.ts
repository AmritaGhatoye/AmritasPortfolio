import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'amrita.',
  tagline: 'Software Tester',
  description:
    "Software Tester with a sharp eye for bugs and a strong focus on quality. Experienced in manual and automation testing using Selenium, Postman, JUnit, and JIRA, with solid knowledge of SDLC, STLC, and Agile workflows. Passionate about building stable, user-friendly applications, with a foundational understanding of MERN stack development.",
  specialText: 'Currently available for opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
