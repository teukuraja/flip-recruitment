import React, {useState} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {Styles} from './ModalSortBy.style';
import Constants from '../../../../Constants/Constants';
import {ButtonRadio} from '../../../../Components';
import {keyExtractor} from '../../../../Utils/Helpers.utils';

const {
  SORT_BY: {NAME_ASC, NAME_DESC, DATE_NEW, DATE_OLD},
} = Constants;

type Props = {
  isVisible: boolean,
  onBackButtonPress: Function,
  checked: number,
  setChecked: Function,
  onSortSelected: Function,
};

const categories = [
  {
    key: 0,
    name: 'URUTKAN',
  },
  {
    key: NAME_ASC,
    name: 'Nama A-Z',
  },
  {
    key: NAME_DESC,
    name: 'Nama Z-A',
  },
  {
    key: DATE_NEW,
    name: 'Tanggal Terbaru',
  },
  {
    key: DATE_OLD,
    name: 'Tanggal Terlama',
  },
];

const ModalSortBy = ({
  isVisible,
  onBackButtonPress,
  checked,
  setChecked,
  onSortSelected,
}: Props) => {
  const renderItem = ({item}) => (
    <TouchableOpacity key={item.key} onPress={onPressed(item.key)}>
      <View style={Styles.radioContainer}>
        <ButtonRadio id={item.key} checked={checked} onPress={onPressed} />
        <Text style={Styles.radioText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const onPressed = (id) => async (key) => {
    // eslint-disable-next-line no-bitwise
    await setChecked(key | id);
    onBackButtonPress();
  };

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={Styles.container}
      isVisible={isVisible}
      useNativeDriver
      backdropTransitionOutTiming={0}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackButtonPress}>
      <View style={Styles.modalWrapper}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </Modal>
  );
};

export default ModalSortBy;
