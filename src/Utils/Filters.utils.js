// note: import this type for define param data type
// eslint-disable-next-line no-unused-vars
import type {ResponseTransactionProp} from '../Types/TransactionType';
import {numberWithCommas, toRupiah} from './Helpers.utils';
import Constants from '../Constants/Constants';

const {
  SORT_BY: {NAME_ASC, NAME_DESC, DATE_NEW, DATE_OLD},
} = Constants;

/**
 * @param {ResponseTransactionProp} data
 * @param {string}                  query
 * @param {function}                dataSetter
 */
const filterData = (data, query, dataSetter) => {
  if (query === '' || query === null || !data) {
    dataSetter(data);
  }

  const lengthData = data.length;
  const newData = [];
  for (let i = 0; i < lengthData; i++) {
    if (data[i].beneficiary_name.toLowerCase().includes(query)) {
      newData.push(data[i]);
    } else if (data[i].sender_bank.toLowerCase().includes(query)) {
      newData.push(data[i]);
    } else if (data[i].beneficiary_bank.toLowerCase().includes(query)) {
      newData.push(data[i]);
    } else if (data[i].amount.toString().includes(query)) {
      newData.push(data[i]);
    } else if (numberWithCommas(data[i].amount).toString().includes(query)) {
      newData.push(data[i]);
    } else if (toRupiah(data[i].amount).toLowerCase().includes(query)) {
      newData.push(data[i]);
    }
  }
  dataSetter(newData);
};

/**
 * @param {ResponseTransactionProp}                     data
 * @param {NAME_ASC | NAME_DESC | DATE_NEW | DATE_OLD } sortType
 * @param {function}                                    dataSetter
 */
const sortBy = (data, sortType, dataSetter) => {
  if (!sortType || sortType === '') {
    dataSetter(data);
  }
  let compare;
  let A, B;
  let isAsc = true;

  compare = (a, b) => {
    if (sortType === NAME_ASC) {
      A = a.beneficiary_name.toLowerCase();
      B = b.beneficiary_name.toLowerCase();
      isAsc = true;
    } else if (sortType === NAME_DESC) {
      A = a.beneficiary_name.toLowerCase();
      B = b.beneficiary_name.toLowerCase();
      isAsc = false;
    } else if (sortType === DATE_NEW) {
      A = a.completed_at.toLowerCase();
      B = b.completed_at.toLowerCase();
      isAsc = true;
    } else if (sortType === DATE_OLD) {
      A = a.completed_at.toLowerCase();
      B = b.completed_at.toLowerCase();
      isAsc = false;
    }
    let comp = 0;
    if (A > B) {
      comp = 1;
    } else if (A < B) {
      comp = -1;
    }

    if (!isAsc) {
      return comp * -1;
    }
    return comp;
  };
  data.sort(compare);
  dataSetter(data);
};

export {filterData, sortBy};
