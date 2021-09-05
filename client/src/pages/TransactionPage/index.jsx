import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TransactionTable from './TransactionTable';
import styles from './TransactionTable.module.scss';

const transactions = [
  { id: 1, date: '2021-08-31', operationType: 'INCOME', amount: 10 },
  { id: 2, date: '2021-09-02', operationType: 'INCOME', amount: 20 },
  { id: 3, date: '2021-09-05', operationType: 'INCOME', amount: 40 },
];

function TransactionPage () {
  return (
    <>
      <Header />
      <section className={styles.transactionTableContainer}>
        <TransactionTable transactions={transactions} />
      </section>
      <Footer />
    </>
  );
}

export default TransactionPage;
