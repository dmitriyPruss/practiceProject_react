import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import prices from './prices.json';
import styles from './PricingPage.module.scss';

function PricingPage () {
  return (
    <>
      <Header />
      <article className={styles.pricesContainer}>
        {prices.map(
          ({
            colorName,
            description,
            price: { amount, currency },
            options,
            backgroundColor,
            linkAddress,
          }) => (
            <article className={styles.priceContainer}>
              <section
                style={{ border: `10px solid ${backgroundColor}` }}
                className={styles.priceElemContainer}
              >
                <h3 style={{ color: backgroundColor }}>{colorName}</h3>
                <p>{description}</p>
                <div style={{ color: backgroundColor }}>
                  {currency}
                  {amount}
                </div>
              </section>
              <ul>
                {options.map(option => (
                  <li>
                    <span>{option}</span>
                    <hr />
                  </li>
                ))}
              </ul>
              <div
                style={{ backgroundColor: backgroundColor }}
                className={styles.priceButton}
              >
                <i class='fas fa-check'></i>
                <a href={linkAddress}>Start</a>
              </div>
            </article>
          )
        )}
      </article>
      <Footer />
    </>
  );
}

export default PricingPage;
