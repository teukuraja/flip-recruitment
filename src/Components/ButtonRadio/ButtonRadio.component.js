// @flow

import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Styles} from './ButtonRadio.style';

type Props = {
  id: number,
  checked: number,
  onPress: Function,
  disabled?: boolean,
};

export default ({id, checked, onPress, disabled = false}: Props) => {
  return (
    <TouchableOpacity onPress={disabled ? null : onPress(id)}>
      <View style={disabled ? Styles.disabled : Styles.container}>
        {id === checked ? <View style={Styles.checked} /> : null}
      </View>
    </TouchableOpacity>
  );
};
