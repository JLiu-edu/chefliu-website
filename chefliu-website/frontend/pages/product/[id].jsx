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
              type="checkbox"
              id="white-onion"
              name="white-onion"
              className={styles.checkbox}
            />
            <label htmlFor="white-onion">
              White Onion <span className="extraPrice"> (+$0.50) </span>
            </label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="mushroom"
              name="mushroom"
              className={styles.checkbox}
            />
            <label htmlFor="mushroom">
              Mushrooms <span className="extraPrice"> (+$0.50) </span>
            </label>
          </div>
        </div>
        <h3 className={styles.choose}>Sauce Options</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="sauce"
              name="sauce"
            />
            <label htmlFor="sauce">
              Extra Sauce <span className="extraPrice"> (+$2.00) </span>
            </label>
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

        <h3 className={styles.choose}>
          Additional Notes/Special Accomodations?
        </h3>

        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
