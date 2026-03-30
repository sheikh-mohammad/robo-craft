import React, { useEffect, useRef } from 'react';
import IndustrialCTA from './IndustrialCTA';
import SchematicSVG from './SchematicSVG';
import GridOverlay from './GridOverlay';
import SystemHeartbeatCore from './SystemHeartbeatCore';
import Interactive3DRobotPreview from './Interactive3DRobotPreview';
import { conditionalAnimate } from '../utils/motion';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';
import heroMobileStyles from '../css/hero-mobile.module.css';

/**
 * HeroSection Component
 * Landing area with main CTA for the industrial homepage
 * Updated to focus on textbook learning approach
 * Mobile responsive: stacks vertically (content above, robot below)
 */
const HeroSection = ({ title, subtitle, description }) => {
  const heroRef = useRef(null);

  // Handle CTA clicks with proper redirects
  const handlePrimaryCtaClick = () => {
    window.location.href = '/robo-craft/docs';
  };

  const handleSecondaryCtaClick = () => {
    // Scroll to modules section
    const modulesSection = document.getElementById('modules-section');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Apply staggered reveal animation when component mounts
    if (heroRef.current) {
      conditionalAnimate(() => {
        const elements = heroRef.current.querySelectorAll('.animate-on-load');
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';

            // Force reflow
            el.offsetHeight;

            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 150); // Stagger the animation
        });
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.card} ${heroMobileStyles.heroSection} hero-section`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#08090d',
        border: '1px solid #f97316',
        padding: '3rem 2rem',
        marginBottom: '3rem',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Grid-based animated background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(249, 115, 22, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(249, 115, 22, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        opacity: 0.2,
        zIndex: 0
      }}></div>

      {/* Schematic SVG */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1 }}>
        <SchematicSVG width="100" height="100" />
      </div>

      {/* Left Content Section */}
      <div className={heroMobileStyles.heroContent} style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '600px',
        flex: '1',
        paddingRight: '2rem'
      }}>
        <h1 className={`animate-on-load ${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {title}
        </h1>

        <h2 className={`animate-on-load ${styles.technicalText} ${colorStyles.textAccentSecondary}`} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          {subtitle}
        </h2>

        <p className={`animate-on-load ${styles.bodyText} ${colorStyles.textPrimary}`} style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          {description}
        </p>

        <div className="animate-on-load" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <IndustrialCTA
            text="Start Learning"
            variant="primary"
            onClick={handlePrimaryCtaClick}
            style={{ minWidth: '200px' }}
          />

          <IndustrialCTA
            text="View Modules"
            variant="secondary"
            onClick={handleSecondaryCtaClick}
            style={{ minWidth: '200px' }}
          />
        </div>

        {/* Free forever messaging */}
        <div className={`animate-on-load ${styles.technicalText} ${colorStyles.textAccentSecondary}`} style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
          <em>Free forever. No lock-in.</em>
        </div>
      </div>

      {/* Right Section - Interactive 3D Robot Preview with Signal Dot */}
      <div className={`${heroMobileStyles.heroRobot} animate-on-load`} style={{
        position: 'relative',
        zIndex: 1,
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* System Heartbeat Core - Positioned at top-left of robot */}
        <div className="animate-on-load" style={{
          position: 'absolute',
          left: '-230px',
          top: '-53px',
          zIndex: 2
        }}>
          <SystemHeartbeatCore />
        </div>

        <Interactive3DRobotPreview />
      </div>
    </section>
  );
};

export default HeroSection;