import { author } from '@/lib/content/portfolio';
import { navbarSection } from '@/lib/content/navbar';
import { DarkModeButton } from '@/components';
import { fadeIn } from '@/styles/animations';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils/helper';

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Calculate active link
  const isActive = (url: string) => {
    if (url === '/#hero' && pathname === '/') return true;
    return pathname.startsWith(url) || (url !== '/' && pathname.includes(url));
  };

  return (
    <>
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden && !isMobileMenuOpen ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center py-4 px-4"
    >
      <nav className="relative flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-bg-secondary/60 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 md:px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <h1 className="text-xl md:text-2xl capitalize font-signature text-accent group transition-colors duration-300 hover:text-white">
            <Link href="/#hero" className="block">
              {author.name}
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.url);
            return (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                    active ? "text-white" : "text-slate-400 hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10 mix-blend-difference"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {cta && (
            <a
              href={cta.url}
              target={cta?.sameTab ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="hidden rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white/20 active:scale-95 md:block"
            >
              {cta.title}
            </a>
          )}

          <DarkModeButton />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="group relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 md:hidden hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-white transition-all duration-300",
                isMobileMenuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-white transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 rounded-full bg-white transition-all duration-300",
                isMobileMenuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>
    </motion.header>


    {/* Clean Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
           onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute left-4 right-4 top-24 rounded-2xl border border-white/10 bg-bg-secondary/95 p-6 shadow-2xl ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
           <ul className="flex flex-col space-y-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.url}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.name}
                    <span className="text-white/20">→</span>
                  </Link>
                </motion.li>
              ))}
              {cta && (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4"
                >
                   <a
                    href={cta.url}
                    target={cta?.sameTab ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-xl bg-accent px-6 py-4 font-bold text-white shadow-lg shadow-accent/20 active:scale-95"
                  >
                    {cta.title}
                  </a>
                </motion.li>
              )}
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
