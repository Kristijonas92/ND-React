import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Topbar.module.scss';

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.logo}>Logoipsum</div>
      <div className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
      </div>
      <button className={styles.loginButton} onClick={handleLogin}>Login / Sign Up</button>
    </div>
  );
};

export default Topbar;