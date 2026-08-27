import Link from 'next/link';
import styles from './CTASection.module.css';

interface CTASectionProps {
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ headline, subheadline, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.subheadline}>{subheadline}</p>
        <Link href={buttonLink} className="btn btn-primary btn-large">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
