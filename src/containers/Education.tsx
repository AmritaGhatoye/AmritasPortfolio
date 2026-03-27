'use client';

import { educationSection } from '@/lib/content/education';
import { getSectionAnimation } from '@/styles/animations';
import { motion } from 'framer-motion';
import { Wrapper } from '@/components';

const Education = () => {
  return (
    <Wrapper id="education" className="max-w-4xl mx-auto px-4" {...getSectionAnimation}>
      <div className="mb-12 md:mb-16 text-center space-y-3">
        <h2 className="heading-secondary !mb-0">{educationSection.title}</h2>
        {educationSection.subtitle && (
          <p className="text-text text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {educationSection.subtitle}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {educationSection.education.map((item, index) => (
          <motion.div
            key={item.id}
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            viewport= {{ once: true }}
            transition= {{ delay: index * 0.12 }}
            className="group relative rounded-2xl border border-white/10 bg-bg-secondary/70 backdrop-blur-md p-6 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-2">
                      {item.institution}
                    </h3>
                    <p className="text-text/80 text-sm">{item.degree}</p>
                  </div>
                  <span className="text-xs text-accent/70 whitespace-nowrap">{item.duration}</span>
                </div>
                <p className="text-xs text-text/60 mb-3">📍 {item.location}</p>
                <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent-light px-3 py-1 text-xs font-semibold text-accent">
                  {item.metric}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Education;
