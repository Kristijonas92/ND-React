import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ icon, title }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/search/${title.toLowerCase()}`);
  };

  return (
    <div className={styles.serviceCard} onClick={handleCardClick}>
      <img src={icon} alt={`${title} icon`} />
      <p>{title}</p>
    </div>
  );
};

export default ServiceCard;
