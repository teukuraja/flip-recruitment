// note: import this type for define param data type
// eslint-disable-next-line no-unused-vars
import type {ResponseTransactionProp} from '../Types/TransactionType';
import {numberWithCommas, toRupiah} from './Helpers.utils';

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
    } else if (toRupiah(data[i].amount).toLowerCase().includes(query.toLowerCase())) {
      newData.push(data[i]);
    }
  }
  dataSetter(newData);
};

export {filterData};
