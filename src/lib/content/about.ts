import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Selenium',
      'Postman',
      'JUnit',
      'JIRA',
      'JavaScript (ES6+)',
      'React',
    ],
  },
  img: '/amrita-ghatoye.jpeg',
};
