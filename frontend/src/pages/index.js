import React from 'react';
import IndustrialHomepage from '../components/IndustrialHomepage';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ModulesSection from '../components/ModulesSection';
import WeeklyBreakdownSection from '../components/WeeklyBreakdownSection';
import FeaturesSection from '../components/FeaturesSection';
import HardwareTiersSection from '../components/HardwareTiersSection';
import FooterCTA from '../components/FooterCTA';
import Footer from '../components/Footer';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * RoboCraftHomepage Component
 * Main page component for the RoboCraft textbook-focused homepage
 * Updated to emphasize learning journey over platform building
 */
const RoboCraftHomepage = () => {
  const handleTierSelect = (tier) => {
    // Navigate to hardware requirements documentation
    window.location.href = '/robo-craft/docs/module-0-getting-started-with-physical-ai/hardware-requirements';
  };

  return (
    <>
      <Navbar />
      <IndustrialHomepage>
        {/* Hero Section - Textbook Learning Focus */}
        <HeroSection
          title="RoboCraft"
          subtitle="Physical AI & Humanoid Robotics Textbook"
          description="Master intelligent humanoid robotics through our comprehensive open-access textbook covering Physical AI, ROS 2, NVIDIA Isaac, Gazebo simulation, and advanced AI integration. Learn at your own pace with hands-on projects and real-world applications."
        />

        {/* Learning Outcomes Section */}
        <section style={{ padding: '3rem 2rem', backgroundColor: '#0f1419', textAlign: 'center' }}>
          <div className={styles.container} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '2rem', marginBottom: '2rem' }}>
              What You'll Learn
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { title: 'Physical AI Principles', desc: 'Understand embodied intelligence and how AI systems function in the physical world' },
                { title: 'ROS 2 Mastery', desc: 'Master the Robot Operating System for robotic control and communication' },
                { title: 'Simulation Skills', desc: 'Simulate robots with Gazebo and Unity for realistic testing environments' },
                { title: 'NVIDIA Isaac Platform', desc: 'Develop with cutting-edge AI robot platform and synthetic data generation' },
                { title: 'Humanoid Design', desc: 'Design humanoid robots for natural human interactions and bipedal locomotion' },
                { title: 'Conversational AI', desc: 'Integrate GPT models for voice-controlled conversational robotics' }
              ].map((outcome, index) => (
                <div key={index} className={styles.card} style={{ padding: '1.5rem', textAlign: 'left' }}>
                  <h3 className={`${styles.technicalText} ${colorStyles.textAccentSecondary}`} style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
                    {outcome.title}
                  </h3>
                  <p className={styles.bodyText} style={{ fontSize: '0.875rem', color: '#94a3b8', margin: 0 }}>
                    {outcome.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section - Course Structure */}
        <ModulesSection />

        {/* Weekly Breakdown Section */}
        <WeeklyBreakdownSection />

        {/* Hardware Requirements Section */}
        <HardwareTiersSection onTierSelect={handleTierSelect} />

        {/* Why Physical AI Matters Section */}
        <section style={{ padding: '4rem 2rem', backgroundColor: '#08090d', textAlign: 'center' }}>
          <div className={styles.container} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Why Physical AI Matters
            </h2>
            <p className={`${styles.bodyText} ${colorStyles.textPrimary}`} style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Humanoid robots are poised to excel in our human-centered world because they share our physical form and can be trained with abundant data from interacting in human environments.
            </p>
            <p className={`${styles.bodyText} ${colorStyles.textPrimary}`} style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              This represents a significant transition from AI models confined to digital environments to embodied intelligence that operates in physical space. Learn how to bridge the gap between the digital brain and the physical body.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <FooterCTA />
      </IndustrialHomepage>
      <Footer />
    </>
  );
};

export default RoboCraftHomepage;