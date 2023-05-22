import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from "../Styles/LandingPage.module.css"

const LandingPage = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>BIENVENIDO!</h1>
        <button className={styles.button} onClick={handleButtonClick}>Ingresar</button>
      </div>
    </div>
  );
};

export default LandingPage;
