'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MouseEvent } from 'react';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for mouse movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const brightness = useTransform(mouseY, [-0.5, 0.5], [1.1, 0.9]);

  return (
    <motion.div
      className="relative w-72 h-96 sm:w-80 sm:h-[30rem] xl:w-96 xl:h-[36rem] group perspective-1000"
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {/* Animated Background Blob */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-accent/30 via-violet-500/20 to-blue-500/30 rounded-full blur-3xl opacity-60 animate-pulse group-hover:opacity-80 transition duration-700" />

        {/* Card Container */}
        <div className="relative w-full h-full rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 p-2 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
             
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-inner bg-bg-secondary">
                 <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                 <motion.div
                    style={{ opacity: brightness }}
                    className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/20 via-transparent to-white/20 mix-blend-overlay"
                 />
            </div>
        </div>
        
        {/* Floating elements removed as per user request */}

      </motion.div>
    </motion.div>
  );
};


export default AuthorImage;
