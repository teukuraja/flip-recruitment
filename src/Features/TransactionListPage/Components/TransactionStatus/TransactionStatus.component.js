// @flow

import React from 'react';
import {View, ViewPropTypes} from 'react-native';
import {Styles} from './TransactionStatus.style';
import Constants from '../../../../Constants/Constants';

const {
  TRANSACTION_STATUS: {SUCCESS, PENDING, FAILED},
} = Constants;

type Props = {
  status: SUCCESS | PENDING | FAILED | string,
  style?: ViewPropTypes.style,
};

const TransactionStatus = ({status, style}: Props) => {
  let styleStatus;

  if (status === SUCCESS) {
    styleStatus = Styles.statusSuccess;
  } else if (status === FAILED) {
    styleStatus = Styles.statusFailed;
  } else {
    styleStatus = Styles.statusPending;
  }

  return <View style={[styleStatus, style]} />;
};

export default TransactionStatus;
