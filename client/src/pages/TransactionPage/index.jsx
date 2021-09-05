import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TransactionTable from './TransactionTable';
import styles from './TransactionTable.module.scss';
import { getTransactionsAction } from '../../actions/actionCreator';
import { getTransactions } from '../../api/rest/restController';
import { connect } from 'react-redux';

// const transactions = [
//   { id: 1, date: '2021-08-31', operationType: 'INCOME', amount: 10 },
//   { id: 2, date: '2021-09-02', operationType: 'INCOME', amount: 20 },
//   { id: 3, date: '2021-09-05', operationType: 'INCOME', amount: 40 },
// ];

function TransactionPage (props) {
  const { isFetching, error, transactions, getTranactions } = props;

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <Header />
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR!!!</div>}
      <section className={styles.transactionTableContainer}>
        <TransactionTable transactions={transactions} />
      </section>
      <Footer />
    </>
  );
}
const mapStateToProps = state => state.transaction;
const mapDispatchToProps = dispatch => ({
  getTransactions: () => dispatch(getTransactionsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
