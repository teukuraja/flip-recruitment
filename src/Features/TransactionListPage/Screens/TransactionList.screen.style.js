import {StyleSheet} from 'react-native';
import {Colors} from '../../../Themes';
import {rbr, rf, rh, rw} from '../../../Utils/Layout.utils';

const Styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: rf(14)
  },
  container: {
    flex: 1,
    backgroundColor: Colors.MINT_CREAM,
    paddingVertical: rh(8),
  },
  filterSection: {
    flexDirection: 'row',
    paddingHorizontal: rw(8),
    height: rh(50),
    marginHorizontal: rw(8),
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: rbr(8),
    marginBottom: rh(8),
  },
  searchContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  searchIcon: {
    width: rw(20),
    height: rw(20),
    alignSelf: 'center',
    tintColor: Colors.NOBEL_GREY,
    marginHorizontal: rw(3),
  },
  searchTextInput: {
    borderWidth: 0,
    padding: 0,
    flex: 1,
    color: Colors.NOBEL_GREY,
    fontSize: rf(12),
  },
  filterMoreContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterMoreLabel: {
    fontSize: rf(12),
    color: Colors.FLIP_ORANGE,
  },
  filterMoreIcon: {
    tintColor: Colors.FLIP_ORANGE,
    width: rw(25),
    height: rh(25),
  },
  flatList: {
    flex: 1,
    paddingBottom: rh(80),
  },
  transactionItemContainer: {
    flex: 1,
    height: rh(90),
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    marginHorizontal: rw(8),
    overflow: 'hidden',
    borderRadius: rbr(8),
    marginVertical: rh(6),
  },
  transactionStatus: {
    width: rw(7),
  },
  transactionDetail: {
    paddingHorizontal: rw(12),
    flex: 1,
    justifyContent: 'center',
  },
  bankDetailSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontSize: rf(15),
    fontWeight: 'bold',
  },
  arrowThick: {
    width: rw(15),
    height: rw(15),
    marginHorizontal: rw(3),
  },
  normalText: {
    fontSize: rf(15),
  },
  smallText: {
    fontSize: rf(13),
    justifyContent: 'center',
  },
});

export {Styles};
