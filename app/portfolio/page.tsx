'use client';

import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

// Portfolio Projects Data
const projects = [
  {
    id: 1,
    title: 'Modern Business Website',
    description: 'A clean, professional website for a growing consulting business with service pages and contact forms.',
    category: 'Business',
    technologies: ['Next.js', 'React', 'CSS', 'Node.js'],
    link: '/portfolio'
  },
  {
    id: 2,
    title: 'E-commerce Fashion Store',
    description: 'Full-featured online store with shopping cart, payment integration, and inventory management.',
    category: 'E-commerce',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    link: '/portfolio'
  },
  {
    id: 3,
    title: 'Product Launch Landing Page',
    description: 'High-converting landing page for a SaaS product launch campaign with email capture.',
    category: 'Landing Page',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '/portfolio'
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description: 'Creative portfolio website for a freelance designer showcasing their work and skills.',
    category: 'Personal',
    technologies: ['Next.js', 'CSS', 'Framer Motion'],
    link: '/portfolio'
  },
  {
    id: 5,
    title: 'Restaurant Website',
    description: 'Beautiful restaurant website with menu display, online reservations, and contact information.',
    category: 'Business',
    technologies: ['React', 'CSS', 'Firebase'],
    link: '/portfolio'
  },
  {
    id: 6,
    title: 'Tech Startup Landing Page',
    description: 'Modern landing page for a tech startup with feature highlights and call-to-action sections.',
    category: 'Landing Page',
    technologies: ['Next.js', 'TypeScript', 'CSS'],
    link: '/portfolio'
  },
  {
    id: 7,
    title: 'Online Bookstore',
    description: 'E-commerce platform for selling books online with search, filtering, and secure checkout.',
    category: 'E-commerce',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '/portfolio'
  },
  {
    id: 8,
    title: 'Photographer Portfolio',
    description: 'Stunning portfolio website for a professional photographer with image galleries and booking.',
    category: 'Personal',
    technologies: ['Next.js', 'React', 'CSS'],
    link: '/portfolio'
  },
  {
    id: 9,
    title: 'Corporate Business Site',
    description: 'Professional corporate website with multiple pages, team profiles, and case studies.',
    category: 'Business',
    technologies: ['Next.js', 'TypeScript', 'CSS', 'CMS'],
    link: '/portfolio'
  }
];

const categories = ['All', 'Business', 'E-commerce', 'Landing Page', 'Personal'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className={styles.portfolioPage}>
      <section className={styles.header}>
        <div className="container">
          <SectionTitle
            title="Our Work"
            subtitle="A selection of websites we've designed and developed for businesses and entrepreneurs."
            centered
          />
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className="container">
          {/* Category Filter */}
          <div className={styles.filterContainer}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className={styles.emptyState}>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
