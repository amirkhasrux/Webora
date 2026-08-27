'use client';

import { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';
import { placeholderImages } from '@/lib/placeholderImages';

const slides = [
  {
    id: 1,
    image: placeholderImages.slide1,
    fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80',
    alt: 'Modern web development workspace - Professional business solutions'
  },
  {
    id: 2,
    image: placeholderImages.slide2,
    fallback: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80',
    alt: 'Business team collaboration - Working together for success'
  },
  {
    id: 3,
    image: placeholderImages.slide3,
    fallback: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&q=80',
    alt: 'Professional team environment - Growing your business online'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
        />
        ))}

      {/* Dark Overlay for text readability */}
      <div className={styles.overlay} />

      {/* Navigation Dots */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
    </div>
    </div>
  );
}

