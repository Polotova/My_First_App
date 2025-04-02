// pages/about.tsx
"use client"; // Mark this component as a client component

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/About.module.css'; // Import the CSS module

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const About: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
    // Check if data is in localStorage
    const cachedData = localStorage.getItem('users');
    if (cachedData) {
      setUsers(JSON.parse(cachedData));
      setLoading(false);
    } else{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result: User[] = await response.json();
        setUsers(result);
        setLoading(false);
        // Cache the data in localStorage
        localStorage.setItem('users', JSON.stringify(result));
      }
      };
    fetchData();
  }, []);


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className={styles.subtitle}>User  List</h2>
          <ul className={styles.userList}>
            {users.map(user => (
              <li key={user.id} className={styles.userItem}>
                <h3>{user.name} ({user.username})</h3>
                <p className={styles.text}>Email: {user.email}</p>
                <p className={styles.text}>Phone: {user.phone}</p>
                <p className={styles.text}>
                  Website: <a className={styles.link} href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
                </p>
                <p className={styles.text}>Address: {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                <p className={styles.text}>Company: {user.company.name} - {user.company.catchPhrase}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>
        <Link href="/">Go to Home Page</Link>
      </p>
    </div>
  );
};

export default About;