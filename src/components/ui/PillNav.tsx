'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import './PillNav.css';

interface NavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface PillNavProps {
  items: NavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

const PillNav = ({
  items,
  activeHref,
  className = '',
  baseColor = 'rgba(255, 255, 255, 0.05)',
  pillColor = 'rgba(255, 255, 255, 0.15)',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = 'rgba(255, 255, 255, 0.84)',
  onMobileMenuClick,
}: PillNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cssVars = useMemo(
    () => ({
      ['--base' as any]: baseColor,
      ['--pill-bg' as any]: pillColor,
      ['--hover-text' as any]: hoveredPillTextColor,
      ['--pill-text' as any]: pillTextColor,
    }),
    [baseColor, hoveredPillTextColor, pillColor, pillTextColor]
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    onMobileMenuClick?.();
  };

  return (
    <div className="pill-nav-container">
      <nav
        className={`pill-nav ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        <div className="pill-nav-items desktop-only">
          <ul className="pill-list" role="menubar">
            {items.map((item) => (
              <li key={item.href} role="none">
                <Link
                  role="menuitem"
                  href={item.href}
                  className={`pill${
                    activeHref === item.href ? ' is-active' : ''
                  }`}
                  aria-label={item.ariaLabel || item.label}
                >
                  <span className="label-stack">
                    <span className="pill-label"> {item.label} </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div
        className="mobile-menu-popover mobile-only"
        style={{
          ...cssVars,
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        }}
      >
        <ul className="mobile-menu-list">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`mobile-menu-link${
                  activeHref === item.href ? ' is-active' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
