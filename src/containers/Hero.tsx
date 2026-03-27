'use client';

import { Button, DarkVeil, GradientText, Wrapper } from '@/components';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';
import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id= "hero"
  className = "relative flex flex-col justify-center items-center h-full min-h-screen z-10 text-center overflow-hidden"
    >
    {/* DarkVeil background effect */ }
    < div className = "fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-20" >
      <DarkVeil
          hueShift={ 0 }
  noiseIntensity = { 0.08}
  scanlineIntensity = { 0}
  speed = { 0.5}
  scanlineFrequency = { 0}
  warpAmount = { 0}
    />
    </div>

  {/* Decorative accent circles */ }
  <motion.div
  animate = {
    { opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }
  }
  transition = {{ duration: 4, repeat: Infinity }
}
className = "absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-9 hidden md:block"
  />
  <motion.div
        animate={ { opacity: [0.15, 0.4, 0.15], scale: [1, 1.15, 1] } }
transition = {{ duration: 5, repeat: Infinity, delay: 1 }}
className = "absolute bottom-32 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-9"
  />

  {/* Subtitle with refined styling */ }
  < motion.div
variants = { slideUp({ delay: getAnimationDelay(0) })}
initial = "hidden"
animate = "show"
className = "mb-6 md:mb-8"
  >
  <div className="flex items-center justify-center gap-3" >
    <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/50" />
      <p className="font-mono text-xs md:text-sm text-accent/80 uppercase tracking-widest" >
        { subtitle }
        </p>
        < div className = "h-px w-8 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          </motion.div>

{/* Main heading with elegant spacing */ }
<div className="max-w-4xl px-4 md:px-0" >
  <motion.div
          variants={ slideUp({ delay: getAnimationDelay(1) }) }
initial = "hidden"
animate = "show"
className = "mb-2 md:mb-4"
  >
  <GradientText
            colors={ ['#5227FF', '#FF9FFC', '#B19EEF'] }
animationSpeed = { 8}
showBorder = { false}
className = "text-slate-900 dark:text-slate-200 text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] capitalize"
  >
  { title }
  </GradientText>
  </motion.div>

{/* Elegant divider */ }
<motion.div
          variants={ slideUp({ delay: getAnimationDelay(1.5) }) }
initial = "hidden"
animate = "show"
className = "flex justify-center my-6 md:my-8"
  >
  <div className="h-1 w-20 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full" />
    </motion.div>

{/* Tagline role highlighting */ }
<motion.h1
          variants={ slideUp({ delay: getAnimationDelay(2) }) }
initial = "hidden"
animate = "show"
className = "text-3xl md:text-5xl font-bold leading-tight md:leading-relaxed bg-gradient-to-r from-accent via-sky-400 to-accent bg-clip-text text-transparent mb-8 md:mb-12"
  >
  { tagline }
  </motion.h1>
  </div>

{/* Description with refined typography */ }
<motion.div
        variants={ slideUp({ delay: getAnimationDelay(3) }) }
initial = "hidden"
animate = "show"
className = "max-w-3xl px-4 md:px-0 mb-6 md:mb-10"
  >
  <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light md:font-normal" >
    { description }
    </p>
    </motion.div>

{/* Status badge with elegance */ }
<motion.div
        variants={ slideUp({ delay: getAnimationDelay(4) }) }
initial = "hidden"
animate = "show"
className = "mb-10 md:mb-12"
  >
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm hover:border-accent/40 hover:bg-accent/10 transition-all duration-300" >
    <span className="relative flex h-2 w-2" >
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" > </span>
        < span className = "relative inline-flex h-2 w-2 rounded-full bg-accent" > </span>
          </span>
          < span className = "font-mono text-xs md:text-sm text-accent/80" >
            { specialText }
            </span>
            </div>
            </motion.div>

{/* CTA Button */ }
{
  cta && (
    <motion.div
          variants={ slideUp({ delay: getAnimationDelay(5) }) }
  initial = "hidden"
  animate = "show"
  className = {`${cta.hideInDesktop ? 'md:hidden' : ''}`
}
        >
  <Button
            href={ cta.url }
type = "link"
size = "lg"
sameTab = { cta.sameTab }
className = "capitalize"
  >
  { cta.title }
  </Button>
  </motion.div>
      )}

{/* Scroll indicator */ }
<motion.div
        animate={ { y: [0, 8, 0] } }
transition = {{ duration: 2, repeat: Infinity }}
className = "absolute bottom-8 md:bottom-12"
  >
  <div className="flex flex-col items-center gap-2" >
    <p className="text-xs text-slate-500 font-mono uppercase tracking-wide" > Scroll to explore </p>
      < svg className = "w-5 h-5 text-accent/50" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" >
        <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth = { 2} d = "M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          </div>
          </motion.div>
          </Wrapper>
  );
};

export default Hero;
