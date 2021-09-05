import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PricesList from './PricesList';
import styles from './PricingPage.module.scss';

function PricingPage () {
  return (
    <>
      <Header />
      <section className={styles.pricingContainer}>
        <ul className={styles.articleList}>
          {prices.map((p, i) => (
            <PricesList />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default PricingPage;
