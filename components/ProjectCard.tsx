import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  technologies,
  imageUrl,
  link
}: ProjectCardProps) {
  return (
    <div className={`card ${styles.projectCard}`}>
      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className={styles.image} />
        ) : (
          <div className={styles.placeholderImage}>
            <span className={styles.placeholderIcon}>🖥️</span>
          </div>
        )}
        <div className={styles.category}>{category}</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>{tech}</span>
          ))}
        </div>
        {link && (
          <Link href={link} className={styles.viewButton}>
            View Project →
          </Link>
        )}
      </div>
    </div>
  );
}
