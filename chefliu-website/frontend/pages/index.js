import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import ProductList from '../components/ProductList';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chef Liu Chinese Restaurant in Scotts Valley, California</title>
        <meta name="description" content="Best Chinese Food In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured></Featured>
      <ProductList></ProductList>
    </div>
  );
}
