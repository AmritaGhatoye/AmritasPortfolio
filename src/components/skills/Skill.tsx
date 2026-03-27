'use client';

import { SoftwareSkillType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';

import { ListItem, SkillIcon } from '@/components';
import { DynamicShowLottie } from '@/components/dynamic/Dynamic';

import { motion, MotionProps } from 'framer-motion';

type Props = {
  lottie?: any;
  title: string;
  points: string[];
  skills: SoftwareSkillType[];
  className?: string;
} & MotionProps;

const Skill = ({
  lottie,
  title,
  skills,
  points,
  className = '',
  ...rest
}: Props) => {
  return (
    <motion.div
      className={`flex gap-8 sm:gap-10 flex-col lg:flex-row items-center ${className}`}
      {...rest}
    >
      {/* Left */}
      <div className="space-y-14 lg:w-1/2 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-accent-light to-transparent border border-accent/10 hover:border-accent/30 transition-all duration-300">
        <h3 className="mb-5 text-2xl text-center capitalize sm:text-3xl bg-gradient-to-r from-accent via-sky-500 to-accent bg-clip-text text-transparent">
          {title}
        </h3>

        <div key={getId()} className="flex flex-wrap justify-center gap-3">
          {skills.map(({ name, icon }) => (
            <motion.div
              key={getId()}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <SkillIcon src={icon} name={name} />
            </motion.div>
          ))}
        </div>

        <ul className="space-y-3 text-base">
          {points.map((point) => (
            <motion.div
              key={getId()}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <ListItem>{point}</ListItem>
            </motion.div>
          ))}
        </ul>
      </div>
      {/* Right */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <DynamicShowLottie
          path={lottie}
          className="md:min-h-[448px] md:min-w-[448px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Skill;
