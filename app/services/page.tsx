"use client";
import Link from 'next/link';
import styles from '../styles/Services.module.css'; // Import your CSS module
import { useEffect, useState } from 'react';

// Define a type for the service
interface Service {
  id: number;
  title: string;
  description: string;
  link: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchServices = async () => {
      const serviceData: Service[] = [
        {
          id: 1,
          title: 'Web Development',
          description: 'Custom web development services tailored to your business needs.',
          link: '/services/web-development',
        },
        {
          id: 2,
          title: 'Mobile App Development',
          description: 'Build high-quality mobile applications for iOS and Android platforms.',
          link: '/services/mobile-app-development',
        },
        {
          id: 3,
          title: 'SEO Services',
          description: 'Optimize your website to rank higher in search engine results.',
          link: '/services/seo',
        },
        {
          id: 4,
          title: 'Digital Marketing',
          description: 'Comprehensive digital marketing strategies to grow your online presence.',
          link: '/services/digital-marketing',
        },
      ];

      // Simulate a delay for fetching data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setServices(serviceData);
      setLoading(false);
    };

    fetchServices();
  }, []);

  // Handle click event
  const handleServiceClick = (title: string) => {
    console.log(`Service clicked: ${title}`);
    // You can add more actions here, such as navigating to a different page or showing a modal
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      {loading ? (
        <p>Loading services...</p>
      ) : (
        <div className={styles.serviceList}>
          {services.map(service => (
            <div 
              key={service.id} 
              className={styles.serviceItem} 
              onClick={() => handleServiceClick(service.title)} // Add onClick handler
            >
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link href={service.link} className={styles.serviceLink}>Learn More</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;