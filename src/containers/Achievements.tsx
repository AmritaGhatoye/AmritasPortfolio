'use client';

import { achievementsSection } from '@/lib/content/achievements';
import { getSectionAnimation } from '@/styles/animations';
import { motion } from 'framer-motion';

import { Wrapper } from '@/components';

const Achievements = () => {
  const { title, subtitle, achievements } = achievementsSection;

  return (
    <Wrapper id="achievements" className="max-w-6xl mx-auto px-4" {...getSectionAnimation}>
      <div className="mb-12 md:mb-16 text-center space-y-3">
        <h2 className="heading-secondary !mb-0">{title}</h2>
        {subtitle && (
          <p className="text-text text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.45, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary/70 p-6 backdrop-blur-md"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-light via-transparent to-transparent opacity-70" />
            <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-accent/40 transition-colors duration-300" />

            <div className="relative space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {achievement.icon}
                </span>
                <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent-light px-3 py-1 text-xs font-semibold text-accent tracking-wide">
                  {achievement.metric}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-dark-2 leading-snug">
                {achievement.title}
              </h3>

              <p className="text-sm sm:text-base text-text leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </Wrapper>
  );
};

export default Achievements;