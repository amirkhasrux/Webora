import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us — Start Your Website Project',
  description: 'Have a business idea or need a website? Get in touch with us to discuss your project.',
};

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <SectionTitle
            title="Let's Build Something Great."
            subtitle="Have a business idea or need a website? Tell us about your project."
            centered
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h3>Get in Touch</h3>
              <p>
                We'd love to hear about your project. Fill out the form and we'll get back to
                you within 24 hours.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <span>✉️</span>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:amirkhasru32@gmail.com">amirkhasru32@gmail.com</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <span>📱</span>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+8801632323161">+8801632323161</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <span>💬</span>
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/+8801632323161" target="_blank" rel="noopener noreferrer">
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <span>📘</span>
                  </div>
                  <div>
                    <h4>Facebook</h4>
                    <a href="https://facebook.com/iam.amirkhasru" target="_blank" rel="noopener noreferrer">
                      Message us on Facebook
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <span>📍</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Apbn Staff Quater, Chandrima, Sector-2, Uttara, Dhaka</p>
                  </div>
                </div>
              </div>

              <div className={styles.availability}>
                <h4>Office Hours</h4>
                <p>Sunday - Thusday: 9:00 AM - 6:00 PM</p>
                <p>Friday - Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
