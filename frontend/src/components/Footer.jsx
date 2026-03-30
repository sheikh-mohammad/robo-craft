import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * Footer Component
 * Comprehensive footer with Learn section, Resources and Copyright
 */
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#08090d',
        borderTop: '1px solid #334155',
        padding: '3rem 2rem 2rem',
        marginTop: '4rem'
      }}
    >
      <div className={styles.container} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Learn Section */}
          <div>
            <h3 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
              Learn
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="/robo-craft/docs"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Start Your Journey
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="#modules-section"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  onClick={(e) => {
                    e.preventDefault();
                    const modulesSection = document.getElementById('modules-section');
                    if (modulesSection) {
                      modulesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Course Modules
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="/robo-craft/docs/"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Getting Started
                </a>
              </li>
            </ul>
          </div>

          {/* Technology Section */}
          <div>
            <h3 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
              Technology
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="/robo-craft/docs/module-2-the-robotic-nervous-system-ros-2"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  ROS 2
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="/robo-craft/docs/module-3-the-digital-twin-gazebo-unity"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Gazebo & Unity
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="/robo-craft/docs/module-4-the-ai-robot-brain-nvidia-isaac"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  NVIDIA Isaac
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="/robo-craft/docs"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Documentation
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="/robo-craft/docs/module-0-getting-started-with-physical-ai/course-overview"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Course Overview
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="/robo-craft/docs/module-0-getting-started-with-physical-ai/hardware-requirements"
                  className={styles.bodyText}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f97316'}
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Hardware Requirements
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and branding */}
        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <div className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            RoboCraft
          </div>
          <p className={`${styles.technicalText} ${colorStyles.textAccentSecondary}`} style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            Physical AI & Humanoid Robotics Textbook
          </p>
          <p className={styles.bodyText} style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
            © {new Date().getFullYear()} RoboCraft - Open Source - Free forever
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
