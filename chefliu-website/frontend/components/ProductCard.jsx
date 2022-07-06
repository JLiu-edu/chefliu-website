import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      {/* <Link href={`/product/${product._id}`} passHref>
        <Image src={product.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.prices[0]}</span>
      <p className={styles.desc}>{product.desc}</p> */}

      <Image src="/img/featured01.png" alt="" width="500" height="500"></Image>

      <h1 className={styles.title}> PRODUCT NAME</h1>
      <span className={styles.price}> $15.95</span>
      <p className={styles.desc}>Product Description</p>
    </div>
  );
};

export default ProductCard;
