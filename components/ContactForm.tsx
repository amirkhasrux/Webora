'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        projectType: '',
        budget: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {submitSuccess && (
        <div className={styles.successMessage}>
          Thank you! We'll get back to you soon.
        </div>
      )}

      <div className={styles.formGrid}>
        {/* Name */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.error : ''}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.error : ''}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Business Name */}
        <div className={styles.formGroup}>
          <label htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
          />
        </div>

        {/* Project Type */}
        <div className={styles.formGroup}>
          <label htmlFor="projectType">Project Type *</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={errors.projectType ? styles.error : ''}
          >
            <option value="">Select a project type</option>
            <option value="business">Business Website</option>
            <option value="ecommerce">E-commerce</option>
            <option value="landing">Landing Page</option>
            <option value="redesign">Website Redesign</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && <span className={styles.errorText}>{errors.projectType}</span>}
        </div>

        {/* Budget */}
        <div className={styles.formGroup}>
          <label htmlFor="budget">Budget</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select a budget range</option>
            <option value="under200">Under $200</option>
            <option value="200-500">$200 - $500</option>
            <option value="500-1000">$500 - $1,000</option>
            <option value="1000+">$1,000+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className={styles.formGroup}>
        <label htmlFor="message">Tell us about your project *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? styles.error : ''}
          placeholder="Describe your project, goals, and any specific requirements..."
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary btn-large"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
