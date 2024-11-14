// components/MainContent.jsx
import React from 'react';
import styles from '../css/MainContent.module.css';

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Welcome to My Portfolio</h1>
          <p> Detail-oriented and innovative web developer with expertise in <br />
              HTML, CSS, JavaScript, and front-end frameworks. Seeking to <br />
              leverage strong problem-solving skills and creativity to build <br />
              responsive, user-friendly websites and applications. Passionate <br />
              about learning new technologies and contributing to dynamic teams <br />
              to deliver high-quality digital experiences.</p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
        I am a Web Developer and Graphic Designer  I enjoy solving complex problems and collaborating with others. I thrive in type of environment, and am always eager to learn and grow. 
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>What I Offer</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>Responsive Design</h3>
            <p>Beautiful designs that adapt perfectly to any screen size.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Fast Performance</h3>
            <p>Optimized code to ensure fast loading and a smooth experience.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>SEO Friendly</h3>
            <p>Ensuring your site is visible to search engines from day one.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
