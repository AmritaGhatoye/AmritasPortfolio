import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'software testing & QA',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/coding.json',
        dark: '/lotties/coding.json',
      },
      points: [
        'Manual and automated testing using Selenium WebDriver and other automation frameworks',
        'Test case design, test plan creation, and test execution following STLC methodology',
        'API testing and validation using Postman',
        'Unit testing with JUnit and integration testing strategies',
        'Bug identification, documentation, and lifecycle management using JIRA',
        'Agile (Scrum) methodology with sprint planning and continuous testing',
      ],
      softwareSkills: [
        { name: 'Selenium', icon: 'vscode-icons:file-type-light-js' },
        { name: 'Postman', icon: 'logos:postman-icon' },
        { name: 'Junit', icon: 'vscode-icons:file-type-light-js' },
        { name: 'jira', icon: 'logos:jira' },
        { name: 'git', icon: 'logos:git-icon' },
        { name: 'github', icon: 'logos:github-icon' },
        { name: 'eclipse', icon: 'vscode-icons:file-type-eclipse' },
        { name: 'Java', icon: 'logos:java' },
      ],
    },
    {
      id: getId(),
      title: 'full stack development',
      lottie: {
        light: '/lotties/fullstack.json',
        dark: '/lotties/fullstack.json',
      },
      points: [
        'Building full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js)',
        'Developing responsive single-page applications with React.js and modern JavaScript',
        'Creating secure backends with Node.js/Express and JWT authentication',
        'Implementing role-based access control and user authentication systems',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'mongodb', icon: 'vscode-icons:file-type-mongo' },
        { name: 'expressjs', icon: 'vscode-icons:file-type-light-js' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
      ],
    },
  ],
};
