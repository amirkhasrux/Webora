import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div className={styles.footerBrand}>
            <h3>Webora</h3>
            <p>
              We help entrepreneurs and small businesses turn their ideas into professional, 
              fast, and modern websites that build trust and attract customers.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com/iam.amirkhasru" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                Facebook
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="https://github.com/amirkhasrux" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerLinks}>
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Website Maintenance</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerLinks}>
            <h4>Contact</h4>
            <ul>
              <li>Amir Khasru</li>
              <li>amirkhasru32@gmail.com</li>
              <li>+8801632323161</li>
              <li>Apbn Staff Quater, Uttara Sector-2, Dhaka</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Webora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
