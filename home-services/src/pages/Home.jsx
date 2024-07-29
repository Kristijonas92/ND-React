import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import styles from './Home.module.scss';

const services = [
    { icon: 'https://img.icons8.com/?size=100&id=12238&format=png&color=000000', title: 'Cleaning' },
    { icon: 'https://img.icons8.com/?size=100&id=85740&format=png&color=000000', title: 'Repair' },
    { icon: 'https://img.icons8.com/?size=100&id=9fS8epYOUvtK&format=png&color=000000', title: 'Painting' },
    { icon: 'https://img.icons8.com/?size=100&id=sbV9vt0Sb5VY&format=png&color=000000', title: 'Shifting' },
    { icon: 'https://img.icons8.com/?size=100&id=66357&format=png&color=000000', title: 'Plumbing' },
    { icon: 'https://img.icons8.com/?size=100&id=12098&format=png&color=000000', title: 'Electric' },
  ];

const Home = () => (
  <div className={styles.mainContent}>
    <h1>Find Home Service/Repair Near You</h1>
    <SearchBar />
    <div className={styles.services}>
      {services.map(service => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </div>
);

export default Home;
