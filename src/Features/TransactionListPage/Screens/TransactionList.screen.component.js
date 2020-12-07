// @flow

import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Styles} from './TransactionList.screen.style';
import {Icons} from '../../../Themes';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import dummyData from '../../../Mock/dummyData.json';
import {
  dateFormatter,
  keyExtractor,
  parseObjToArr,
  toRupiah,
} from '../../../Utils/Helpers.utils';
import ButtonStatus from '../Components/ButtonStatus/ButtonStatus.component';
import type {ResponseTransactionProp} from '../../../Types/TransactionType';
import TransactionStatus from '../Components/TransactionStatus/TransactionStatus.component';
import {filterData, sortBy} from '../../../Utils/Filters.utils';
import ModalSortBy from '../Components/ModalSortBy/ModalSortBy.component';
import {Routes} from '../../../Navigation/Routes';

type ScreenProps = {
  navigation: NavigationProp,
  route: RouteProp,
};

const TransactionListScreen = ({navigation, route}: ScreenProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data: ResponseTransactionProp, setData: function] = useState([]);
  const [checked, setChecked] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    actionFilter();
    return () => {};
  }, [actionFilter, searchQuery]);

  useEffect(() => {
    onSortSelected();
    return () => {};
  }, [onSortSelected, checked]);

  const onSearchQuery = (value) => {
    setSearchQuery(value);
  };

  const onPressSortByMenu = () => {
    setModalVisible(true);
  };

  const hideModalSortBy = () => {
    setModalVisible(false);
  };

  const onSortSelected = useCallback(() => {
    if (checked === 0) {
      const transactionList = parseObjToArr(dummyData);
      setData(transactionList);
    } else {
      sortBy(data, checked, setData);
    }
  }, [checked, data]);

  const onPressItem = (item) => () => {
    navigation.navigate(Routes.TransactionDetailScreen, {item});
  };

  const actionFilter = useCallback(() => {
    const transactionList = parseObjToArr(dummyData);
    if (searchQuery === '') {
      setData(transactionList);
    }
    filterData(transactionList, searchQuery.toLowerCase(), setData);
  }, [searchQuery]);

  const renderTransactionItem = ({item}) => {
    return (
      <TouchableOpacity onPress={onPressItem(item)}>
        <View style={Styles.transactionItemContainer}>
          <TransactionStatus
            status={item?.status}
            style={Styles.transactionStatus}
          />
          <View style={Styles.transactionDetail}>
            <View style={Styles.bankDetailSection}>
              <Text style={Styles.boldText}>
                {item?.sender_bank.toUpperCase()}
              </Text>
              <Image
                source={Icons.arrow_right_thick}
                style={Styles.arrowThick}
              />
              <Text style={Styles.boldText}>
                {item?.beneficiary_bank.toUpperCase()}
              </Text>
            </View>
            <Text style={Styles.normalText}>
              {item?.beneficiary_name.toUpperCase()}
            </Text>
            <Text style={Styles.smallText}>
              {toRupiah(item?.amount)}
              <Text style={Styles.boldText}> • </Text>
              {dateFormatter(item?.completed_at)}
            </Text>
          </View>
          <ButtonStatus status={item?.status} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.filterSection}>
        <View style={Styles.searchContainer}>
          <Image source={Icons.magnify} style={Styles.searchIcon} />
          <TextInput
            placeholder="Cari nama, bank, atau nominal"
            style={Styles.searchTextInput}
            value={searchQuery}
            onChangeText={onSearchQuery}
          />
        </View>
        <TouchableWithoutFeedback onPress={onPressSortByMenu}>
          <View style={Styles.filterMoreContainer}>
            <Text style={Styles.filterMoreLabel}>URUTKAN</Text>
            <Image source={Icons.chevron_down} style={Styles.filterMoreIcon} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={Styles.content}>
        <FlatList
          data={data}
          renderItem={renderTransactionItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={Styles.flatList}
        />
      </View>
      <ModalSortBy
        isVisible={isModalVisible}
        onBackButtonPress={hideModalSortBy}
        checked={checked}
        setChecked={setChecked}
        onSortSelected={onSortSelected}
      />
    </View>
  );
};

export default TransactionListScreen;
