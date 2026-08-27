import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ProcessStep from '@/components/ProcessStep';
import CTASection from '@/components/CTASection';
import styles from './page.module.css';

// Services Data
const services = [
  {
    icon: '🏢',
    title: 'Business Website',
    description: 'Professional websites that help establish your business online and build credibility with customers.'
  },
  {
    icon: '🚀',
    title: 'Landing Page',
    description: 'High-converting landing pages designed to capture leads and grow your business effectively.'
  },
  {
    icon: '🛒',
    title: 'E-commerce Website',
    description: 'Fully functional online stores that help you sell products and services with ease.'
  },
  {
    icon: '✨',
    title: 'Website Redesign',
    description: 'Modernize your existing website with fresh design and improved user experience.'
  }
];

// Benefits Data
const benefits = [
  {
    icon: '🎨',
    title: 'Modern & Professional Design',
    description: 'Beautiful, clean designs that make your business stand out and look trustworthy.'
  },
  {
    icon: '📱',
    title: 'Mobile Responsive',
    description: 'Your website will look perfect on all devices - desktop, tablet, and mobile.'
  },
  {
    icon: '⚡',
    title: 'Fast Performance',
    description: 'Lightning-fast loading times that keep visitors engaged and improve SEO.'
  },
  {
    icon: '📈',
    title: 'Built for Business Growth',
    description: 'Designed with your business goals in mind to help you attract and convert customers.'
  }
];

// Featured Projects Data
const featuredProjects = [
  {
    title: 'Modern Business Website',
    description: 'A clean, professional website for a growing consulting business.',
    category: 'Business',
    technologies: ['Next.js', 'React', 'CSS'],
    link: '/portfolio'
  },
  {
    title: 'E-commerce Store',
    description: 'Full-featured online store with shopping cart and payment integration.',
    category: 'E-commerce',
    technologies: ['React', 'Node.js', 'Stripe'],
    link: '/portfolio'
  },
  {
    title: 'Marketing Landing Page',
    description: 'High-converting landing page for a product launch campaign.',
    category: 'Landing Page',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '/portfolio'
  }
];

// Process Steps Data
const processSteps = [
  {
    step: 1,
    title: 'Tell Us Your Idea',
    description: 'Share your vision and business goals with us. We\'ll listen and understand your needs.'
  },
  {
    step: 2,
    title: 'Plan & Design',
    description: 'We create a custom design that matches your brand and meets your objectives.'
  },
  {
    step: 3,
    title: 'Development',
    description: 'Our team builds your website with clean code and modern technologies.'
  },
  {
    step: 4,
    title: 'Launch',
    description: 'We test everything thoroughly and launch your website to the world.'
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <Hero
        headline="We Build Websites That Help New Businesses Grow."
        subheadline="We help entrepreneurs and small businesses turn their ideas into professional, fast, and modern websites that build trust and attract customers."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/portfolio' }}
      />

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Our Services"
            subtitle="We offer a range of web development services to help your business succeed online."
            centered
          />
          <div className="grid grid-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Why Choose Us"
            subtitle="We focus on delivering quality websites that help your business grow."
            centered
          />
          <div className="grid grid-4">
            {benefits.map((benefit, index) => (
              <ServiceCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Featured Projects"
            subtitle="Check out some of the websites we've built for businesses like yours."
            centered
          />
          <div className="grid grid-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Our Simple Process"
            subtitle="We make it easy to go from idea to a live website in just four steps."
            centered
          />
          <div className="grid grid-4">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Have an idea for your business?"
        subheadline="Let's turn your idea into a professional website."
        buttonText="Let's Talk"
        buttonLink="/contact"
      />
    </main>
  );
}
