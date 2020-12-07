// @flow

import {connect} from 'react-redux';
import {getTransactionList} from './TransactionListPage.actions';
import TransactionListScreen from './Screens/TransactionList.screen.component';

const mapStateToProps = (state) => ({
  loading: state.transactionStore.transaction.loading,
  error: state.transactionStore.transaction.error,
  transactionList: state.transactionStore.transaction.data,
});

const mapDispatchToProps = (dispatch) => ({
  getTransactionList: () => dispatch(getTransactionList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionListScreen);
