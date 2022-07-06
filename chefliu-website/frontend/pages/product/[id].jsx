import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Product = () => {
  //   const [size, setSize] = useState(0);
  const size = 0;
  const pizza = {
    id: 1,
    img: '/img/featured01.png',
    name: 'Orange Chicken',
    price: 16.25,
    desc: 'Hand-breaded, deep fried pieces of chicken in a sweet and tangy orange sauce.',
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        {/* <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div> */}
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="Sauce"
              name="Sauce"
            />
            <label htmlFor="cheese">Extra Sauce</label>
          </div>

          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>

          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="side"
              name="side"
            />
            <label htmlFor="side">Sauce On Side</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
