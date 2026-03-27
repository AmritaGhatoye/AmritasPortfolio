'use client';
import { TabList } from '@/components';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id= "experience"
  className = "max-w-4xl py-40 mx-auto px-4"
  {...getSectionAnimation }
    >
    <h2 className="heading-secondary text-4xl mb-12" > { experienceSection.title } </h2>
      < TabList experiences = { experienceSection.experiences } />
        </motion.section>
  );
};

export default Experience;
