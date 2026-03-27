'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import {
  motion,
  MotionProps,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const spotLightX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const spotLightY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const background = useMotionTemplate`radial-gradient(400px circle at ${spotLightX}% ${spotLightY}%, rgba(var(--accent-rgb), 0.15), transparent 80%)`;

  return domLoaded ? (
    <motion.div
      ref= { cardRef }
      onMouseMove = { handleMouseMove }
  onMouseLeave = { handleMouseLeave }
  style = {{
    rotateX,
      rotateY,
      perspective: 1000,
        transformStyle: 'preserve-3d',
      }
}
className = "group relative w-full max-w-[380px]"
whileHover = {{ y: -10, scale: 1.02 }}
transition = {{ type: 'spring', stiffness: 300, damping: 20 }}
{...rest }
    >
  <div
        onClick={ () => window.open(url) }
className = {
  cn(
          'relative block cursor-pointer overflow-hidden rounded-[2rem] border border-white/5 bg-bg-secondary/40 backdrop-blur-xl',
          'shadow-xl shadow-black/40 transition-all duration-500 hover:border-accent/30 hover:shadow-accent/10',
          'p-1' // Container for gradient border
  )
}
  >
  {/* Dynamic spot light background */ }
  < motion.div
className = "pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
style = {{ background }}
        />

  < div className = "relative z-10 overflow-hidden rounded-[1.9rem] bg-bg-secondary/80" >
    {/* Image with zoom effect */ }
    < div className = "relative h-[220px] w-full overflow-hidden" style = {{ transform: 'translateZ(20px)' }}>
      <Image
              src={ img }
alt = { name }
fill
placeholder = "blur"
blurDataURL = { blurImageURL }
className = "object-cover transition-transform duration-700 ease-out group-hover:scale-110"
  />
  {/* Soft gradient overlay on image */ }
  < div className = "absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-60" />
    <div className="absolute inset-0 bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Year badge */ }
      < span className = "absolute right-4 top-4 z-20 rounded-lg border border-white/10 bg-black/40 px-2 py-1 font-mono text-[10px] text-white backdrop-blur-md transition-all duration-300 group-hover:border-accent/30 group-hover:text-accent" >
        { year }
        </span>
        </div>

{/* Content area */ }
<div className="space-y-4 p-6" style = {{ transform: 'translateZ(30px)' }}>
  <div className="flex items-center justify-between" >
    <p className="font-mono text-[10px] uppercase tracking-widest text-accent/80 group-hover:text-accent" >
      { tags.slice(0, 3).join(' · ') }
      </p>
      < div className = "flex items-center space-x-3" >
        <motion.a
                  href={ repo }
onClick = {(e) => e.stopPropagation()}
className = "text-slate-400 transition-colors duration-300 hover:text-white"
target = "_blank"
whileHover = {{ scale: 1.2, rotate: 12 }}
                >
  <Icon icon="tabler:brand-github" width = { 20} height = { 20} />
    </motion.a>
    < motion.a
href = { url }
onClick = {(e) => e.stopPropagation()}
className = "text-slate-400 transition-colors duration-300 hover:text-accent"
target = "_blank"
whileHover = {{ scale: 1.2, rotate: -12 }}
                >
  <Icon icon="ci:external-link" width = { 22} height = { 22} />
    </motion.a>
    </div>
    </div>

    < h4 className = "text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-accent" >
      { name }
      </h4>

{/* Subtle glow border at the bottom */ }
<div className="h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
  </div>
  </div>
  </div>
  </motion.div>
  ) : (
  <></>
);
};

export default ProjectCard;

