import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'Home', url: '/#hero' },
    { name: 'About', url: '/#about' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Achievements', url: '/#achievements' },
    { name: 'Education', url: '/#education' },
    { name: 'Certifications', url: '/#experience' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ],
  cta: {
    title: 'Resume',
    url: `/${resumeFileName}`,
  },
};
