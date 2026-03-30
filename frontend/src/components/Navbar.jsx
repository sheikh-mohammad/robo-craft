import React, { useState } from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';
import mobileStyles from '../css/mobile-menu.module.css';

/**
 * Navbar Component
 * Navigation bar with LEARN FREE, MODULES, TECHNOLOGY, and GitHub link
 * Includes hamburger menu for mobile devices (< 768px)
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      style={{
        backgroundColor: '#08090d',
        borderBottom: '1px solid #334155',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className={styles.container} style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Logo */}
        <a
          href="/robo-craft/"
          className={`${styles.headline} ${colorStyles.textAccentPrimary}`}
          style={{
            fontSize: '1.5rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
          onMouseLeave={(e) => e.target.style.color = '#f97316'}
        >
          <span style={{ color: '#ffffff' }}
            onMouseEnter={(e) => e.target.style.color = '#fb923c'}
            onMouseLeave={(e) => e.target.style.color = '#ffffff'}
          >⚙</span>
          RoboCraft
        </a>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className={mobileStyles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={mobileStyles.hamburgerLine}></span>
          <span className={mobileStyles.hamburgerLine}></span>
          <span className={mobileStyles.hamburgerLine}></span>
        </button>

        {/* Navigation Links (Desktop) */}
        <div className={mobileStyles.desktopNav}>
          <a
            href="/robo-craft/docs"
            className={`${styles.bodyText}`}
            style={{
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              fontSize: '0.95rem',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fb923c'}
            onMouseLeave={(e) => e.target.style.color = '#ffffff'}
          >
            LEARN FREE
          </a>

          <a
            href="#modules-section"
            className={`${styles.bodyText}`}
            style={{
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              fontSize: '0.95rem',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fb923c'}
            onMouseLeave={(e) => e.target.style.color = '#ffffff'}
            onClick={(e) => {
              e.preventDefault();
              const modulesSection = document.getElementById('modules-section');
              if (modulesSection) {
                modulesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            MODULES
          </a>

          <a
            href="/robo-craft/docs/module-0-getting-started-with-physical-ai"
            className={`${styles.bodyText}`}
            style={{
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              fontSize: '0.95rem',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fb923c'}
            onMouseLeave={(e) => e.target.style.color = '#ffffff'}
          >
            TECHNOLOGY
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/sheikh-mohammad/robo-craft"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.bodyText}`}
            style={{
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.2s ease',
              fontSize: '0.95rem',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => e.target.style.color = '#fb923c'}
            onMouseLeave={(e) => e.target.style.color = '#ffffff'}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GITHUB
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className={mobileStyles.mobileMenuOverlay} onClick={closeMobileMenu}>
            <div className={mobileStyles.mobileMenu} onClick={(e) => e.stopPropagation()}>
              <button
                className={mobileStyles.closeButton}
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
              >
                ✕
              </button>

              <div className={mobileStyles.mobileMenuItems}>
                <a
                  href="/robo-craft/docs"
                  className={mobileStyles.mobileMenuItem}
                  onClick={closeMobileMenu}
                >
                  LEARN FREE
                </a>

                <a
                  href="#modules-section"
                  className={mobileStyles.mobileMenuItem}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    setTimeout(() => {
                      const modulesSection = document.getElementById('modules-section');
                      if (modulesSection) {
                        modulesSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 300);
                  }}
                >
                  MODULES
                </a>

                <a
                  href="/robo-craft/docs/module-0-getting-started-with-physical-ai"
                  className={mobileStyles.mobileMenuItem}
                  onClick={closeMobileMenu}
                >
                  TECHNOLOGY
                </a>

                <a
                  href="https://github.com/sheikh-mohammad/robo-craft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mobileStyles.mobileMenuItem}
                  onClick={closeMobileMenu}
                >
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle (for responsive design) */}
      <style>{`
        @media (max-width: 768px) {
          nav > div {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </nav >
  );
};

export default Navbar;
