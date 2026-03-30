import React from 'react';
import ModuleCard from './ModuleCard';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * ModulesSection Component
 * Displays course modules from course structure
 */
const ModulesSection = () => {
  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction to Physical AI",
      description: "Foundations of Physical AI and embodied intelligence. Learn how AI systems function in reality and comprehend physical laws.",
      difficulty: "Beginner",
      duration: "2 weeks",
      isAdvanced: false
    },
    {
      id: 2,
      title: "Module 2: The Robotic Nervous System (ROS 2)",
      description: "Master ROS 2 middleware for robot control. Build packages, manage nodes, topics, and services.",
      difficulty: "Intermediate",
      duration: "3 weeks",
      isAdvanced: false
    },
    {
      id: 3,
      title: "Module 3: The Digital Twin (Gazebo & Unity)",
      description: "Physics simulation and environment building. Simulate sensors, gravity, and collisions in realistic environments.",
      difficulty: "Intermediate",
      duration: "2 weeks",
      isAdvanced: false
    },
    {
      id: 4,
      title: "Module 4: The AI-Robot Brain (NVIDIA Isaac™)",
      description: "Advanced perception and training with NVIDIA Isaac Sim. Hardware-accelerated VSLAM and path planning.",
      difficulty: "Advanced",
      duration: "3 weeks",
      isAdvanced: true
    },
    {
      id: 5,
      title: "Module 5: Vision-Language-Action (VLA)",
      description: "The convergence of LLMs and Robotics. Voice-to-Action using OpenAI Whisper and cognitive planning with LLMs.",
      difficulty: "Advanced",
      duration: "2 weeks",
      isAdvanced: true
    },
    {
      id: 6,
      title: "Module 6: Humanoid Robot Development",
      description: "Humanoid robot kinematics, dynamics, bipedal locomotion, and natural human-robot interaction design.",
      difficulty: "Advanced",
      duration: "2 weeks",
      isAdvanced: true
    },
    {
      id: 7,
      title: "Module 7: Conversational Robotics",
      description: "Integrating GPT models for conversational AI. Speech recognition and multi-modal interaction.",
      difficulty: "Advanced",
      duration: "1 week",
      isAdvanced: true
    }
  ];

  return (
    <section
      id="modules-section"
      className={styles.container}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#08090d'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Course Modules
        </h2>
        <p className={`${styles.bodyText} ${colorStyles.textPrimary}`} style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto' }}>
          Master Physical AI through a comprehensive curriculum covering robotics fundamentals, simulation, and advanced AI integration.
        </p>
      </div>

      <div className={styles.gridContainer} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            title={module.title}
            description={module.description}
            difficulty={module.difficulty}
            duration={module.duration}
            isAdvanced={module.isAdvanced}
            onClick={() => {
              // Navigate to module documentation
              window.location.href = `/robo-craft/docs/module-${module.id}`;
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ModulesSection;
