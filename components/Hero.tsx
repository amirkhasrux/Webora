'use client';

import Link from 'next/link';
import HeroSlider from './HeroSlider';
import styles from './Hero.module.css';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className={styles.hero}>
      {/* Background Slider */}
      <HeroSlider />

      {/* Hero Content */}
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.subheadline}>{subheadline}</p>
          <div className={styles.ctaButtons}>
            <Link href={primaryCTA.href} className="btn btn-primary btn-large">
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="btn btn-secondary btn-large">
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
