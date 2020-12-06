// @flow

import React from 'react';
import {View, Text} from 'react-native';
import {Styles} from './ButtonStatus.style';
import Constants from '../../../../Constants/Constants';

const {
  TRANSACTION_STATUS: {SUCCESS, PENDING, FAILED},
} = Constants;

type Props = {
  status: SUCCESS | PENDING | FAILED | string,
};

const ButtonStatus = ({status}: Props) => {
  let styleButton;
  let styleTextButton;
  let textButton;

  if (status === SUCCESS) {
    styleButton = Styles.buttonSuccess;
    styleTextButton = Styles.textSuccess;
    textButton = 'Berhasil';
  } else if (status === FAILED) {
    styleButton = Styles.buttonFailed;
    styleTextButton = Styles.textFailed;
    textButton = 'Gagal';
  } else {
    styleButton = Styles.buttonPending;
    styleTextButton = Styles.textFailed;
    textButton = 'Pengecekan';
  }

  return (
    <View style={[Styles.buttonContainer, styleButton]}>
      <Text style={[Styles.text, styleTextButton]}>{textButton}</Text>
    </View>
  );
};

export default ButtonStatus;
