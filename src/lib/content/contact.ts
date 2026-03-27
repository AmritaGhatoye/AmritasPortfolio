import { author, socialLinks } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I am always open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.',
  ],
  link: `mailto:${author.email}`,
  contactMethods: [
    {
      label: 'Email',
      value: author.email,
      href: `mailto:${author.email}`,
      icon: 'tabler:mail',
    },
    {
      label: 'Send Message',
      value: 'Direct message',
      href: `mailto:${author.email}?subject=Let's%20Connect&body=Hi%20Amrita,%0A%0AI'd%20like%20to%20connect%20with%20you.`,
      icon: 'tabler:message-circle-2',
    },
    {
      label: 'LinkedIn',
      value: '@amrita-ghatoye',
      href: socialLinks.linkedin,
      icon: 'tabler:brand-linkedin',
    },
    {
      label: 'GitHub',
      value: '@AmritaGhatoye',
      href: socialLinks.github,
      icon: 'tabler:brand-github',
    },
  ],
};
