'use client';

import {
  About,
  Achievements,
  Contact,
  Education,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
    <Layout>
    <Hero />
    < About />
    <FeaturedProjects />
    < Skills />
    <Education />
    < Experience />
    <Achievements />
    < Contact />
    </Layout>
    </>
  );
};

export default Home;
