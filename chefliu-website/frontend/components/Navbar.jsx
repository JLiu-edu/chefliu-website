import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32"></Image>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}> 831-438-5772</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}> Homepage</li>
          <li className={styles.listItem}> Products</li>
          <li className={styles.listItem}> Menu</li>
          <h2> CHEF LIU LOGO </h2>
          <li className={styles.listItem}> Blog</li>
          <li className={styles.listItem}> Contacts</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px"></Image>
          <div className={styles.counter}> 2</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
