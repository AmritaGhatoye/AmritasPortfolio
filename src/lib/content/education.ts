import { EducationSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const educationSection: EducationSectionType = {
  title: 'education',
  subtitle: 'academic background and qualifications',
  education: [
    {
      id: getId(),
      icon: '🎓',
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology – Computer Science and Engineering',
      duration: 'Aug 2023 – Present',
      metric: 'CGPA: 6.82',
      location: 'Phagwara, Punjab',
    },
    {
      id: getId(),
      icon: '🏫',
      institution: 'Indian Public School',
      degree: 'Intermediate – PCM',
      duration: 'Apr 2021 – Mar 2022',
      metric: 'Percentage: 78%',
      location: 'Yamunanagar, Haryana',
    },
    {
      id: getId(),
      icon: '🏫',
      institution: 'Indian Public School',
      degree: 'Matriculation',
      duration: 'Apr 2019 – Apr 2020',
      metric: 'Percentage: 82%',
      location: 'Yamunanagar, Haryana',
    },
  ],
};
