import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PricesList.module.scss';

function PricesListItem (props) {
  const {
    priceItem: {
      colorName,
      description,
      price: { amount, currency },
      options,
    },
    color,
  } = props;

  return (
    <li className={styles.pricesListItem}>
      <div className={styles.header} style={{ borderColor: color }}>
        <h3 style={{ color: color }}>{colorName}</h3>
        <p>{description}</p>
        <p style={{ color: color }}>
          {currency} {amount}
        </p>
      </div>
      <ul>
        {options.map((o, i) => (
          <li data-tooltip='tooltip)))' key={i}>
            {o}
          </li>
        ))}
      </ul>
      <Link to='#'>
        <i />
        Start
      </Link>
    </li>
  );
}
