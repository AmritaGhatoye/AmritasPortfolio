'use client';

import featuredProjectsSection from '@/lib/content/featured-projects';

import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';

import { getSectionAnimation } from '@/styles/animations';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  return (
    <Wrapper id="projects" {...getSectionAnimation} className="relative mx-auto py-24 w-full max-w-[85rem] px-4 md:px-8 lg:px-12">
      {/* Dynamic Background Effects */ }
      < div className = "pointer-events-none absolute inset-0 -z-20" >
        <motion.div
          animate={
    {
      y: [0, -30, 0],
        x: [0, 20, 0],
          scale: [1, 1.1, 1],
          }
  }
  transition = {{
    duration: 10,
      repeat: Infinity,
        ease: 'easeInOut',
          }
}
className = "absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
  />
  <motion.div
          animate={
  {
    y: [0, 40, 0],
      x: [0, -30, 0],
        scale: [1, 1.2, 1],
          }
}
transition = {{
  duration: 15,
    repeat: Infinity,
      ease: 'easeInOut',
        delay: 2,
          }}
className = "absolute right-0 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]"
  />
  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>

    < div className = "relative mb-20 text-center" >

      <motion.div
          initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6 }}
className = "inline-block"
  >
  <h2 className="heading-secondary !mb-2 capitalize text-center tracking-tight" >
    { featuredProjectsSection.title }
    </h2>

    < div className = "relative mx-auto mt-2 h-[3px] w-24 overflow-hidden rounded-full bg-white/5" >
      <motion.div
              initial={ { x: '-100%' } }
whileInView = {{ x: '100%' }}
viewport = {{ once: true }}
transition = {{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
className = "h-full w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
  />
  </div>
  </motion.div>

  < motion.p
initial = {{ opacity: 0 }}
whileInView = {{ opacity: 1 }}
viewport = {{ once: true }}
transition = {{ delay: 0.2, duration: 0.6 }}
className = "mx-auto mt-6 max-w-2xl font-mono text-[10px] uppercase tracking-[0.3em] text-accent/70 sm:text-xs"
  >
  Pushing the boundaries of modern web architecture
    </motion.p>
    </div>

    < div className = "space-y-16 sm:space-y-24 md:space-y-32" >
    {
      featuredProjectsSection.projects.map((project, i) => (
        <FeaturedProject
            key= { project.id }
            align = { i % 2 === 0 ? 'right' : 'left'}
{...project }
{...getSectionAnimation }
          />
        ))}
</div>
  </Wrapper>
  );
};

export default FeaturedProjects;

