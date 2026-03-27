'use client';
import { skillsSection } from '@/lib/content/skills';
import { Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Skills = () => {
  const { title, skills } = skillsSection;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Wrapper id= "skills" {...getSectionAnimation }>
      {/* Section Header */ }
      < motion.div
  initial = {{ opacity: 0, y: 20 }
}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6 }}
className = "text-center mb-16 md:mb-20 relative"
  >
  {/* Decorative background elements */ }
  < motion.div
animate = {{ opacity: [0.1, 0.25, 0.1] }}
transition = {{ duration: 5, repeat: Infinity }}
className = "absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"
  />

  {/* Subtitle with elegant styling */ }
  < div className = "flex items-center justify-center gap-3 mb-4" >
    <div className="h-px w-6 bg-gradient-to-r from-transparent to-accent/50" />
      <p className="font-mono text-xs md:text-sm uppercase text-accent/70 tracking-widest" >
        expertise
        </p>
        < div className = "h-px w-6 bg-gradient-to-l from-transparent to-accent/50" />
          </div>

{/* Main title */ }
<h2 className="heading-secondary !mb-0" > { title } </h2>

{/* Elegant divider */ }
<div className="flex justify-center mt-8" >
  <div className="h-1 w-16 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full" />
    </div>
    </motion.div>

{/* Skills Grid - Two Column Layout */ }
<motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto"
variants = { containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true }}
      >
{
  skills.map((skillSet, index) => (
    <motion.div
            key= { skillSet.id }
            variants = { itemVariants }
            className = "group relative"
    >
    <div className="relative h-full p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 backdrop-blur-md transition-all duration-300 hover:border-accent/40 overflow-hidden"
    >
    {/* Decorative background glow */ }
  < div className = "absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/0 transition-all duration-300 pointer-events-none" />

  {/* Floating accent blob */ }
  < motion.div
                animate = {{ y: [0, -10, 0] }}
transition = {{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
className = "absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-300"
  />

  <div className="relative z-10" >
    {/* Title with icon indicator */ }
    < div className = "flex items-center gap-3 mb-6" >
      <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors" >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-blue-400" />
          </div>
          < h3 className = "text-xl md:text-2xl font-bold text-white capitalize group-hover:text-accent transition-colors duration-300" >
            { skillSet.title }
            </h3>
            </div>

{/* Divider */ }
<div className="h-px w-12 bg-gradient-to-r from-accent to-transparent mb-6" />

  {/* Expertise Points */ }
  < motion.div
className = "space-y-4 mb-8"
variants = { containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true }}
                >
{
  skillSet.points.map((point, idx) => (
    <motion.div
                      key= { idx }
                      variants = { itemVariants }
                      className = "flex gap-3 items-start group/item"
    >
    {/* Animated bullet point */ }
    < div className = "flex-shrink-0 mt-1" >
    <div className="relative flex h-2 w-2 group-hover/item:scale-150 transition-transform" >
  <span className="animate-pulse absolute inline-flex h-2 w-2 rounded-full bg-accent/50" > </span>
  < span className = "relative inline-flex h-2 w-2 rounded-full bg-accent" />
  </div>
  </div>
  < p className = "text-sm md:text-base text-slate-300 group-hover/item:text-slate-100 transition-colors leading-relaxed font-light" >
  { point }
  </p>
  </motion.div>
  ))
}
  </motion.div>

{/* Technology Tags */ }
<div className="pt-6 border-t border-white/10" >
  <p className="text-xs font-semibold text-accent/70 uppercase tracking-wider mb-4" >
    Technologies
    </p>
    < motion.div
className = "flex flex-wrap gap-2"
variants = { containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true }}
                  >
{
  skillSet.softwareSkills.map((skill) => (
    <motion.div
                        key= { skill.name }
                        variants = { itemVariants }
                        className = "group/tech flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                        title = { skill.name }
    >
    <Icon
                          icon={ skill.icon }
                          width = { 16}
                          height = { 16}
                          className = "text-accent/70 group-hover/tech:text-accent transition-colors"
    />
    <span className="text-xs font-medium text-slate-400 group-hover/tech:text-slate-200 transition-colors" >
    { skill.name }
    </span>
  </motion.div>
  ))
}
  </motion.div>
  </div>
  </div>
  </div>
  </motion.div>
        ))}
</motion.div>

{/* Optional: Summary stats or CTA */ }
<motion.div
        initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.5, duration: 0.6 }}
className = "mt-16 md:mt-20 text-center"
  >
  <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed" >
    Combining expertise in quality assurance and full - stack development to deliver robust,
      scalable applications with comprehensive testing strategies.
        </p>
        </motion.div>
        </Wrapper>
  );
};

export default Skills;
