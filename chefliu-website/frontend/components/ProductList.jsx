import React from 'react';
import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

function ProductList({ productList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST CHINESE FOOD IN TOWN</h1>
      <p className={styles.desc}>
        Home of the finest chinese food Scotts Valley has to offer.
      </p>
      {/* <div className={styles.wrapper}>
        {productList.map((product) => (
          <ProductCard key={product._id} Product={product} />
        ))}
      </div> */}
      <div className={styles.wrapper}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
}

export default ProductList;
