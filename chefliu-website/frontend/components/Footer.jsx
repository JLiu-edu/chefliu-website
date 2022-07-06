import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill"></Image>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}> BUSINESS MOTTO</h2>{' '}
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> ADDRESS </h1>
          <p className={styles.text}>
            4303 1/2 SCOTTS VALLEY DRIVE
            <br /> SCOTTS VALLEY, CA 95066
            <br /> 831 - 438 - 5772
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY AND SUNDAY
            <br /> 11:00 AM - 8:30 PM
          </p>
          <p className={styles.text}>
            SATURDAY
            <br /> 4:00 PM - 8:30 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
