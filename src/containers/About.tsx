'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';
import { AuthorImage, Link, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const { title, img, list } = aboutSection;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return domLoaded ? (
    <Wrapper id= "about" {...getSectionAnimation }>
      <div className="relative isolate py-16 sm:py-24 lg:py-32" >
        {/* Decorative background blobs */ }
        < motion.div
  animate = {{ opacity: [0.1, 0.25, 0.1] }
}
transition = {{ duration: 5, repeat: Infinity }}
className = "absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
  />
  <motion.div
          animate={ { opacity: [0.15, 0.3, 0.15] } }
transition = {{ duration: 6, repeat: Infinity, delay: 1 }}
className = "absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"
  />

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative" >
    {/* Section Header */ }
    < motion.div
initial = {{ opacity: 0, y: 20 }}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6 }}
className = "text-center mb-12 md:mb-16"
  >
  {/* Subtitle with elegant styling */ }
  < div className = "flex items-center justify-center gap-3 mb-4" >
    <div className="h-px w-6 bg-gradient-to-r from-transparent to-accent/50" />
      <p className="font-mono text-xs md:text-sm uppercase text-accent/70 tracking-widest" >
        Get to know me
          </p>
          < div className = "h-px w-6 bg-gradient-to-l from-transparent to-accent/50" />
            </div>

{/* Main title */ }
<h2 className="heading-secondary !mb-0" > { title } </h2>

{/* Elegant divider */ }
<div className="flex justify-center mt-6" >
  <div className="h-1 w-16 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full" />
    </div>
    </motion.div>

{/* Glass background container */ }
<div className="relative rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20" >

  {/* Main content grid - Stack on mobile, side-by-side on desktop */ }
  < div className = "grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start" >

    {/* Left Column: Text & Content - 7 cols */ }
    < motion.div
initial = {{ opacity: 0, x: -40 }}
whileInView = {{ opacity: 1, x: 0 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6 }}
className = "lg:col-span-7 space-y-6 md:space-y-8"
  >
  {/* Introduction */ }
  < motion.div
variants = { itemVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true }}
className = "space-y-3"
  >
  <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light" >
    Hi, my name is < span className = "font-bold text-white" > { author.name } </span>, a dedicated{' '}
      < span className = "bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400 font-bold" >
        Software Tester
          </span>{' '}
                  and student at{ ' ' }
<Link
                    href="https://www.lpu.in/"
target = "_blank"
className = "font-semibold text-accent hover:text-white transition-colors hover:underline"
  >
  Lovely Professional University
    </Link>.
    </p>
    </motion.div>

{/* Core expertise sections */ }
<motion.div
                variants={ containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true }}
className = "space-y-5"
  >
  {/* Expertise 1 */ }
  < motion.div variants = { itemVariants } className = "space-y-2" >
    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider" > Focus Areas </h3>
      < p className = "text-base md:text-lg text-slate-400 leading-relaxed font-light" >
        Primarily focused on quality assurance, test automation, and ensuring robust application performance through comprehensive testing strategies.
                  </p>
          </motion.div>

{/* Expertise 2 */ }
<motion.div variants={ itemVariants } className = "space-y-2 pt-4 border-t border-white/10" >
  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider" > Core Competencies </h3>
    < p className = "text-base md:text-lg text-slate-400 leading-relaxed font-light" >
      Strong expertise in <span className="text-slate-300 font-medium" > SDLC </span>,{' '}
        < span className = "text-slate-300 font-medium" > STLC </span>,{' '}
          < span className = "text-slate-300 font-medium" > Agile(Scrum) </span>, and comprehensive bug lifecycle management.
            </p>
            </motion.div>

{/* Expertise 3 */ }
<motion.div variants={ itemVariants } className = "space-y-2 pt-4 border-t border-white/10" >
  <h3 className="text-sm font-semibold text-accent uppercase tracking-wider" > Tools & Technologies </h3>
    < p className = "text-base md:text-lg text-slate-400 leading-relaxed font-light" >
      Proficient with <span className= "text-slate-300 font-medium" > Selenium </span>,{' '}
        < span className = "text-slate-300 font-medium" > Postman </span>,{' '}
          < span className = "text-slate-300 font-medium" > JUnit </span>, and{' '}
            < span className = "text-slate-300 font-medium" > JIRA </span> for test management and bug tracking.
              </p>
              </motion.div>
              </motion.div>

{/* Skills Pills */ }
{
  list && (
    <motion.div
                  initial={ { opacity: 0, y: 20 } }
  whileInView = {{ opacity: 1, y: 0 }
}
viewport = {{ once: true }}
transition = {{ delay: 0.3, duration: 0.5 }}
className = "pt-4 border-t border-white/10"
  >
  <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider" > Technologies </h3>
    < motion.ul
className = "flex flex-wrap gap-2"
variants = { containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true }}
                  >
{
  list.items.map((item) => (
    <motion.li
                        key= { getId() }
                        variants = { itemVariants }
                        className = "px-3 py-1.5 text-xs md:text-sm font-medium rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-sm hover:shadow-accent/20"
    >
    { item }
    </motion.li>
  ))
}
  </motion.ul>
  </motion.div>
              )}

{/* Testing Focus Dashboard */ }
<motion.div
                initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
transition = {{ delay: 0.4, duration: 0.5 }}
className = "pt-4 border-t border-white/10"
  >
  <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider" > Testing Expertise </h3>
    < motion.div
className = "grid grid-cols-2 md:grid-cols-3 gap-3"
variants = { containerVariants }
initial = "hidden"
whileInView = "visible"
viewport = {{ once: true }}
                >
{
  ['Automation', 'API Testing', 'Manual Testing'].map((focus) => (
    <motion.div
                      key= { focus }
                      variants = { itemVariants }
                      className = "group relative flex items-center gap-2 rounded-lg bg-gradient-to-br from-white/5 to-white/0 border border-white/20 p-3 hover:border-accent/40 hover:from-white/10 hover:to-white/5 transition-all duration-300"
    >
    <div className="relative flex h-2 w-2 flex-shrink-0" >
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" > </span>
  < span className = "relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
  </div>
  < span className = "text-xs md:text-sm font-medium text-slate-200 group-hover:text-slate-100 transition-colors" >
  { focus }
  </span>
  </motion.div>
  ))
}
  </motion.div>
  </motion.div>
  </motion.div>

{/* Right Column: Image - 5 cols */ }
<motion.div
              initial={ { opacity: 0, x: 40, scale: 0.95 } }
whileInView = {{ opacity: 1, x: 0, scale: 1 }}
viewport = {{ once: true }}
transition = {{ duration: 0.6 }}
className = "lg:col-span-5 flex justify-center items-start sticky top-20"
  >
  <motion.div
                animate={ { y: [0, -8, 0] } }
transition = {{ duration: 3, repeat: Infinity }}
className = "w-full max-w-sm"
  >
  {/* Premium Image Container - CV Professional Style */ }
  < div className = "relative w-full max-w-xs" >
    {/* Subtle background glow */ }
    < div className = "absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl blur-2xl opacity-50 -z-10 scale-105" />

      {/* Main professional frame */ }
      < div className = "relative rounded-xl overflow-hidden" >
        {/* Clean white border for professional look */ }
        < div className = "absolute inset-0 rounded-xl border-2 border-white/30 -z-20" />

          {/* Glass background */ }
          < div className = "relative rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm border border-white/20 shadow-lg" >
            <motion.div
          animate={ { scale: [1, 1.005, 1] } }
transition = {{ duration: 6, repeat: Infinity }}
className = "w-full aspect-square flex items-center justify-center bg-gradient-to-br from-white/10 to-black/30"
  >
  <AuthorImage src={ img } alt = { author.name } />
    </motion.div>

{/* Professional vignette */ }
<div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 via-transparent to-black/20 pointer-events-none" />
  </div>

{/* Subtle shadow box for depth */ }
<div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-black/10 blur-lg -z-10" />
  </div>

{/* Animated professional accent - Single accent glow */ }
<motion.div
      animate={ { opacity: [0.2, 0.4, 0.2] } }
transition = {{ duration: 5, repeat: Infinity }}
className = "absolute -top-6 -right-6 w-20 h-20 bg-accent/30 rounded-full blur-2xl -z-5"
  />
  </div>
  </motion.div>
  </motion.div>
  </div>
  </div>
  </div>
  </div>
  </Wrapper>
  ) : (
  <></>
);
};

export default About;
