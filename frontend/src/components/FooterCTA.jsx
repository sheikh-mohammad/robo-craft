import React from 'react';
import IndustrialCTA from './IndustrialCTA';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * FooterCTA Component
 * Bottom call-to-action section that redirects to /robo-craft/docs
 */
const FooterCTA = () => {
  const handleCtaClick = () => {
    window.location.href = '/robo-craft/docs';
  };

  return (
    <section
      style={{
        backgroundColor: '#08090d',
        padding: '4rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid #334155',
        borderBottom: '1px solid #334155'
      }}
    >
      <div className={styles.container} style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Ready to Start Your Journey?
        </h2>
        <p className={`${styles.bodyText} ${colorStyles.textPrimary}`} style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          Master Physical AI and Humanoid Robotics through comprehensive, hands-on learning.
          Start building your expertise today with our free, open-access textbook.
        </p>
        <IndustrialCTA
          text="Get Started Today"
          variant="primary"
          onClick={handleCtaClick}
          style={{ minWidth: '250px', fontSize: '1.125rem', padding: '1rem 2rem' }}
        />
        <div className={`${styles.technicalText} ${colorStyles.textAccentSecondary}`} style={{ marginTop: '1.5rem', fontSize: '0.875rem' }}>
          <em>Free forever. No lock-in. No credit card required.</em>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
