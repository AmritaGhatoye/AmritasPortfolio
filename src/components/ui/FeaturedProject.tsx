'use client';

import { FeaturedProjectType } from '@/lib/types';
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
import Link from 'next/link';
import React, { useRef } from 'react';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tags,
  align = 'left',
  ...rest
}: Props) => {
  const cardRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for smoother tilt
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Map mouse position to rotation values (max 5 degrees for subtlety)
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = e.clientX - rect.left;
    const mouseYRelative = e.clientY - rect.top;

    // Center-based coordinates normalized to [-0.5, 0.5]
    mouseX.set(mouseXRelative / width - 0.5);
    mouseY.set(mouseYRelative / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Spot light effect based on mouse position
  const spotLightX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const spotLightY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const background = useMotionTemplate`radial-gradient(600px circle at ${spotLightX}% ${spotLightY}%, rgba(var(--accent-rgb), 0.1), transparent 80%)`;

  return (
    <motion.article
      ref= { cardRef }
  className = {
    cn(
        'group relative overflow-hidden rounded-[2rem] border border-accent/20 bg-bg-secondary/40 backdrop-blur-xl',
        'shadow-2xl shadow-black/40 transition-shadow duration-500 hover:shadow-accent/10',
        'focus-within:ring-2 focus-within:ring-accent/30',
        'p-1' // Container for the gradient border effect
    )
  }
  style = {{
    rotateX,
      rotateY,
      perspective: 1000,
        transformStyle: 'preserve-3d',
      }
}
onMouseMove = { handleMouseMove }
onMouseLeave = { handleMouseLeave }
whileHover = {{ y: -8, scale: 1.01 }}
transition = {{ type: 'spring', stiffness: 200, damping: 20 }}
{...rest }
    >
  {/* Dynamic spot light background */ }
  < motion.div
className = "pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
style = {{ background }}
      />

{/* Glassy border overlay */ }
<div className="absolute inset-0 z-0 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-accent/5 opacity-50" />

  {/* Floating accent blobs inside the card */ }
  < div className = "pointer-events-none absolute -right-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/10 blur-[80px] transition-all duration-700 group-hover:bg-accent/20 group-hover:blur-[100px]" />
    <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-blue-500/5 blur-[60px] transition-all duration-700 group-hover:bg-blue-500/10" />

      <div className="relative z-10 h-full w-full rounded-[1.9rem] bg-bg-secondary/80 p-4 sm:p-6 md:p-0" >
        <div className="relative z-10 grid h-full items-stretch md:grid-cols-12" >
          {/* Badge Removed */}

{/* Image Container */ }
<Link
            href={ url }
target = "_blank"
rel = "noopener noreferrer"
className = {
  cn(
              'relative block min-h-[300px] overflow-hidden rounded-2xl md:col-span-7 md:min-h-[400px]',
    align === 'right' ? 'md:order-1' : 'md:order-2',
  'm-2 md:m-3',
  // Subtle blur blend edge
  'after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]'
            )}
            style={{ transform: 'translateZ(30px)' }}
          >
            {/* Badge inside image */}
            <span className="absolute left-4 top-4 z-30 flex items-center gap-2 rounded-full border border-accent/30 bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent backdrop-blur-md transition-all duration-300 hover:bg-black/80 sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Featured Project
            </span>
  {/* Soft gradient overlay for smooth blend with content */ }
  < div
className = {
  cn(
                'absolute inset-0 z-10 hidden md:block',
    align === 'right'
  ? 'bg-gradient-to-l from-bg-secondary/90 via-bg-secondary/20 to-transparent'
  : 'bg-gradient-to-r from-bg-secondary/90 via-bg-secondary/20 to-transparent'
              )}
            />
  < div className = "absolute inset-0 z-10 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-accent/20 via-transparent to-transparent opacity-20" />

      <Image
              src={ img }
alt = { name }
fill
className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
placeholder = "blur"
blurDataURL = { blurImageURL }
sizes = "(max-width: 768px) 100vw, 40vw"
priority
  />
  </Link>


{/* Content Container */ }
<div
            className={
  cn(
    'flex flex-col justify-center gap-6 p-4 md:col-span-5 md:p-8 lg:p-10',
    align === 'right' ? 'md:order-2' : 'md:order-1'
  )
}
style = {{ transform: 'preserve-3d' }}
          >
  <div style={ { transform: 'translateZ(40px)' } }>
    <h3 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-accent sm:text-3xl lg:text-4xl" >
      <Link href={ url } target = "_blank" rel = "noopener noreferrer" className = "hover:text-accent" >
        { name }
        </Link>
        </h3>

        < p className = "mb-6 text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300 sm:text-base lg:text-lg" >
          { description }
          </p>

          < div className = "mb-8 flex flex-wrap gap-2" >
          {
            tags.map((tag) => (
              <span
                    key= { tag }
                    className = "rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 font-mono text-[10px] text-slate-400 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-accent sm:text-xs"
              >
              { tag }
              </span>
            ))
          }
            </div>

            < div className = "flex flex-wrap items-center gap-4" >
              { repo && (
                <Link
                    href={ repo }
target = "_blank"
rel = "noopener noreferrer"
className = "group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-mono text-xs font-medium text-white transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
  >
  <Icon
                      icon="tabler:brand-github"
width = { 18}
height = { 18}
className = "transition-transform duration-300 group-hover/btn:-translate-y-1"
  />
  <span>Source Code </span>
    < div className = "absolute inset-0 -z-10 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
      </Link>
                )}

<Link
                  href={ url }
target = "_blank"
rel = "noopener noreferrer"
className = "group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-6 py-3 font-mono text-xs font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-accent-light hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)] active:scale-95"
  >
  <Icon
                    icon="ci:external-link"
width = { 20}
height = { 20}
className = "transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110"
  />
  <span>Live Demo </span>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </motion.article>
  );
};

export default FeaturedProject;
