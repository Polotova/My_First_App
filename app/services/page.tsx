// pages/services/index.js
import Link from 'next/link';
import styles from '../styles/Services.module.css'; // Import your CSS module

const Services = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>Web Development</h2>
          <p className={styles.serviceDescription}>
            Custom web development services tailored to your business needs.
          </p>
          <Link href="/services/web-development" className={styles.serviceLink}>Learn More</Link>
        </div>
        
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>Mobile App Development</h2>
          <p className={styles.serviceDescription}>
            Build high-quality mobile applications for iOS and Android platforms.
          </p>
          <Link href="/services/mobile-app-development" className={styles.serviceLink}>Learn More</Link>
        </div>
        
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>SEO Services</h2>
          <p className={styles.serviceDescription}>
            Optimize your website to rank higher in search engine results.
          </p>
          <Link href="/services/seo" className={styles.serviceLink}>Learn More</Link>
        </div>
        
        <div className={styles.serviceItem}>
          <h2 className={styles.serviceTitle}>Digital Marketing</h2>
          <p className={styles.serviceDescription}>
            Comprehensive digital marketing strategies to grow your online presence.
          </p>
          <Link href="/services/digital-marketing" className={styles.serviceLink}>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;