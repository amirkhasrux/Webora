'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  subheadline = 'We help entrepreneurs and small businesses turn their ideas into professional, fast, and modern websites that build trust and attract customers.',
  primaryCTA = { text: 'Explore Solutions', href: '/contact' },
  secondaryCTA = { text: 'Learn More', href: '/about' }
}: HeroProps) {
  const heroFeatures = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Lightning Fast',
      subtitle: 'Optimized Server Components'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6L2 12L8 18" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Semantic HTML',
      subtitle: 'Accessible & SEO-Friendly'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Modern Styling',
      subtitle: 'Next-Gen Responsive UI'
    }
  ];

  return (
    <section className={styles.hero}>
      {/* Ambient background glow and grid */}
      <div className={styles.ambientGlow} />
      <div className={styles.gridOverlay} />

      {/* Hero Content */}
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            <span className={styles.gradientText}>Webora</span>
          </h1>

          <p className={styles.subheadline}>
            {subheadline}
          </p>

          <div className={styles.ctaButtons}>
            <Link href={primaryCTA.href} className="btn btn-primary btn-large">
              <span>{primaryCTA.text}</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="btn btn-secondary btn-large">
                {secondaryCTA.text}
              </Link>
            )}
          </div>

          {/* Feature Badges matching the reference screenshot */}
          <div className={styles.featureGrid}>
            {heroFeatures.map((item, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconBox}>
                  {item.icon}
                </div>
                <div className={styles.featureTextBox}>
                  <div className={styles.featureTitle}>{item.title}</div>
                  <div className={styles.featureSubtitle}>{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
