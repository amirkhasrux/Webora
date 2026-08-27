import SectionTitle from '@/components/SectionTitle';
import styles from './page.module.css';

// Skills Data
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Responsive Design',
  'SEO',
  'UI/UX Design',
  'Git',
  'Performance Optimization'
];

// Principles Data
const principles = [
  {
    icon: '✨',
    title: 'Simplicity',
    description: 'We believe in clean, simple designs that are easy to use and understand.'
  },
  {
    icon: '🎯',
    title: 'Quality',
    description: 'Every project we work on is built with attention to detail and high standards.'
  },
  {
    icon: '🤝',
    title: 'Transparency',
    description: 'We communicate openly and keep you informed throughout the entire process.'
  },
  {
    icon: '📈',
    title: 'Business Growth',
    description: 'We focus on creating websites that help your business succeed and grow.'
  }
];

export default function About() {
  return (
    <main className={styles.aboutPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <SectionTitle
            title="About Us"
            subtitle="We're passionate about helping entrepreneurs and small businesses succeed online."
            centered
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2>Helping Businesses Build Their Online Presence</h2>
              <p>
                We started this journey because we saw too many talented entrepreneurs and small
                business owners struggling to establish a professional online presence. Many have
                great ideas and valuable services, but they lack the technical skills or resources
                to build a website that truly represents their business.
              </p>
              <p>
                That's where we come in. We believe every business deserves a professional website
                that builds trust, attracts customers, and helps them grow. We work closely with
                our clients to understand their vision and bring it to life with modern,
                functional websites.
              </p>
              <p>
                Whether you're just starting out or looking to refresh your online presence, we're
                here to help you succeed.
              </p>
            </div>
            <div className={styles.introVisual}>
              <div className={styles.visualCard}>
                <h3>Our Mission</h3>
                <p>
                  To make professional web development accessible and affordable for new
                  entrepreneurs and small businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.missionSection}>
            <SectionTitle
              title="Helping Ideas Become Real Businesses Online"
              subtitle="Many new entrepreneurs have great ideas but struggle to establish a professional online presence. Our goal is to bridge that gap and make professional websites more accessible."
              centered
            />
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="What We Believe"
            subtitle="The core values that guide everything we do."
            centered
          />
          <div className="grid grid-4">
            {principles.map((principle, index) => (
              <div key={index} className={`card ${styles.principleCard}`}>
                <div className={styles.principleIcon}>{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Our Skills & Expertise"
            subtitle="Technologies and skills we use to build modern, professional websites."
            centered
          />
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillTag}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className={styles.storySection}>
            <SectionTitle
              title="Our Story"
              subtitle="How we got started and what drives us today."
              centered
            />
            <div className={styles.storyContent}>
              <p>
                <strong>[Replace this section with your personal story]</strong>
              </p>
              <p>
                This is where you can share your journey - how you got into web development,
                what inspired you to help entrepreneurs, and what makes your approach unique.
                Keep it authentic and personal to build trust with potential clients.
              </p>
              <p>
                Talk about your experiences, the challenges you've overcome, and why you're
                passionate about helping businesses succeed online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
