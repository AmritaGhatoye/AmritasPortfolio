import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Appointy – Doctor Appointment Web App',
      description: 'A full-stack healthcare web application for managing doctor appointments.',
      tasks:
        'Built a full-stack healthcare web app using MERN stack with JWT authentication and role-based access (Patient, Doctor, Admin). Developed key features like doctor search, appointment booking, dashboards, and profile management for a seamless healthcare experience. Designed a responsive and user-friendly interface to ensure smooth navigation and better user experience.',
      url: 'https://github.com/AmritaGhatoye',
      repo: 'https://github.com/AmritaGhatoye',
      img: '/appointy.png',
      tags: [
        'MongoDB',
        'Express',
        'React',
        'Node.js',
        'JWT',
        'Role-based Access',
      ],
    },
    {
      id: getId(),
      name: 'Campus Gathering',
      description: 'A full-stack campus event management platform for seamless event discovery, RSVP, and admin analytics.',
      tasks:
        'Developed a full-stack campus event management platform using React (TypeScript) for the frontend and Express.js with MySQL for the backend. Implemented secure authentication, real-time event browsing, interactive RSVP functionality, and automated event notifications. Designed and built an admin dashboard for streamlined event creation, moderation, and analytics tracking. Deployed the application on Vercel with serverless architecture and integrated a CI/CD pipeline to ensure scalability and high performance.',
      url: 'https://campus-gathering.vercel.app/',
      repo: 'https://github.com/AmritaGhatoye/Campus-Gathering',
      img: '/campus-gat.png',
      tags: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Express.js',
        'MySQL',
        'Admin Dashboard',
        'CI/CD Pipeline',
      ],
    },
  ],
};

export default featuredProjectsSection;
