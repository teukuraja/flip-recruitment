// @flow

import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, Clipboard, TouchableWithoutFeedback} from 'react-native';
import {Styles} from './TransactionDetail.screen.style';
import {Icons} from '../../../Themes';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {dateFormatter, toRupiah} from '../../../Utils/Helpers.utils';
import type {Transaction} from '../../../Types/TransactionType';
import Snackbar from 'react-native-snackbar';
import {Routes} from '../../../Navigation/Routes';

type ScreenProps = {
  navigation: NavigationProp,
  route: RouteProp,
};

const TransactionDetailScreen = ({navigation, route}: ScreenProps) => {
  const [dataItem: Transaction, setDataItem] = useState({});

  const dataSetter = useCallback(() => {
    const {
      params: {item},
    } = route;
    if (item) {
      setDataItem(item);
    }
  }, [route]);

  useEffect(() => {
    dataSetter();
    return () => {};
  }, [dataSetter]);

  const onPressCopy = async () => {
    await Clipboard.setString(dataItem?.id);
    Snackbar.show({
      text: 'Kode transaksi Disalin ke Clipboard',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  const onPressClose = () => {
    navigation.navigate(Routes.TransactionListScreen);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.transactionHeader}>
          <Text style={Styles.textHeader}>
            {'ID TRANSAKSI: #' + dataItem?.id || ''}
          </Text>
          <TouchableWithoutFeedback onPress={onPressCopy}>
            <Image source={Icons.content_copy} style={Styles.copyIcon} />
          </TouchableWithoutFeedback>
        </View>
        <View style={Styles.transactionHeader}>
          <Text style={Styles.textHeader}>DETAIL TRANSAKSI</Text>
          <Text onPress={onPressClose} style={Styles.linkText}>
            Tutup
          </Text>
        </View>
      </View>
      <View style={Styles.transactionDetailSection}>
        <View style={Styles.bankDetail}>
          <Text style={Styles.boldText}>
            {(dataItem?.sender_bank || '').toUpperCase()}
          </Text>
          <Image source={Icons.arrow_right_thick} style={Styles.arrowThick} />
          <Text style={Styles.boldText}>
            {(dataItem?.beneficiary_bank || '').toUpperCase()}
          </Text>
        </View>
        <View style={Styles.col2}>
          <View style={Styles.infoWrapper}>
            <Text style={Styles.labelInfo}>{dataItem?.beneficiary_name}</Text>
            <Text style={Styles.normalText}>{dataItem?.account_number}</Text>
          </View>
          <View style={Styles.infoWrapper}>
            <Text style={Styles.labelInfo}>NOMINAL</Text>
            <Text style={Styles.normalText}>
              {dataItem?.amount && toRupiah(dataItem?.amount)}
            </Text>
          </View>
        </View>
        <View style={Styles.col2}>
          <View style={Styles.infoWrapper}>
            <Text style={Styles.labelInfo}>BERITA TRANSFER</Text>
            <Text style={Styles.normalText}>{dataItem?.remark || ''}</Text>
          </View>
          <View style={Styles.infoWrapper}>
            <Text style={Styles.labelInfo}>KODE UNIK</Text>
            <Text style={Styles.normalText}>{dataItem?.unique_code || ''}</Text>
          </View>
        </View>
        <View style={Styles.infoWrapper}>
          <Text style={Styles.labelInfo}>WAKTU DIBUAT</Text>
          <Text style={Styles.normalText}>
            {dataItem?.created_at && dateFormatter(dataItem?.created_at)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetailScreen;
