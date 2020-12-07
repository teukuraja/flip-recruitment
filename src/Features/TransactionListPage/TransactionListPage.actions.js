import {DispatchProp} from 'react-redux';
import axios from 'axios';
import {
  REQ_TRANSACTION_LIST,
  REQ_TRANSACTION_LIST_FAILED,
  REQ_TRANSACTION_LIST_SUCCESS,
} from '../../Redux';
import {transactionList} from '../../Constants/ApiEndPoints';
import {parseObjToArr} from '../../Utils/Helpers.utils';
import Constants from '../../Constants/Constants';
import Snackbar from 'react-native-snackbar';

const {RESPONSE} = Constants;

const getTransactionList = () => async (dispatch: DispatchProp) => {
  dispatch({
    type: REQ_TRANSACTION_LIST,
    api: transactionList,
  });

  const optionHeaders = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(transactionList);
    if (response.status === RESPONSE.SUCCESS) {
      const result =
        typeof response.data === 'object'
          ? parseObjToArr(response.data)
          : response.data;

      dispatch({
        type: REQ_TRANSACTION_LIST_SUCCESS,
        api: transactionList,
        payload: result,
      });
    } else {
      Snackbar.show({
        text: 'Terjadi kesalahan sistem, Coba lagi nanti',
        duration: Snackbar.LENGTH_SHORT,
      });
      dispatch({
        type: REQ_TRANSACTION_LIST_FAILED,
        api: transactionList,
        errorMessage: 'Something was wrong',
      });
    }
  } catch (e) {
    Snackbar.show({
      text: 'Terjadi kesalahan sistem, Coba lagi nanti',
      duration: Snackbar.LENGTH_SHORT,
    });
    dispatch({
      type: REQ_TRANSACTION_LIST_FAILED,
      api: transactionList,
      errorMessage: 'Something was wrong',
    });
  }
};

export {getTransactionList};
