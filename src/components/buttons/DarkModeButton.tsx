'use client';
import { useTheme } from '@/lib/hooks/use-theme';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const DarkModeButton = ({
  className,
  onClick,
  ...rest
}: Props & MotionProps) => {
  const { isDarkMode, toggle } = useTheme();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e);
    toggle();
  };

  return (
    <motion.button
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
      className={`rounded-lg p-2 border border-white/10 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors duration-300 ${className}`}
      onClick={clickHandler}
      {...rest}
    >
      <Icon
        icon={isDarkMode ? 'carbon:sun' : 'ph:moon'}
        width="26"
        height="26"
      />
    </motion.button>
  );
};

export default DarkModeButton;
