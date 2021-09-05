import React from 'react';
import prices from './prices.json';
import PricesListItem from './PricesListItem';

const colorsMap = [
  'rgb(224,180,141)',
  'rgb(233,191,100)',
  'rgb(101,101,101)',
  'rgb(61,213,212)',
];

function PricesList () {
  return (
    <ul className={StyleSheet.articlesList}>
      {prices.map((p, i) => {
        <PricesListItem key={i} priceItem={p} color={colorMap} />;
      })}
    </ul>
  );
}
