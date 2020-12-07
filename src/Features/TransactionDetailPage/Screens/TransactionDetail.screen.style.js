import {StyleSheet} from 'react-native';
import {Colors} from '../../../Themes';
import {rf, rh, rw} from '../../../Utils/Layout.utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MINT_CREAM,
    paddingVertical: rh(30),
  },
  header: {
    elevation: 1,
    backgroundColor: Colors.WHITE,
  },
  transactionHeader: {
    height: rh(60),
    paddingHorizontal: rw(20),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.GREY_BACKGROUND,
  },
  textHeader: {
    fontSize: rf(14),
    fontWeight: 'bold',
  },
  copyIcon: {
    width: rw(18),
    height: rw(18),
    resizeMode: 'stretch',
    tintColor: Colors.FLIP_ORANGE,
    marginHorizontal: rw(8),
  },
  linkText: {
    fontSize: rf(14),
    color: Colors.FLIP_ORANGE,
    position: 'absolute',
    end: rw(20),
  },
  transactionDetailSection: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: rw(20),
    paddingTop: rh(14),
    paddingBottom: rh(22),
  },
  bankDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontSize: rf(16),
    fontWeight: 'bold',
  },
  arrowThick: {
    width: rw(18),
    height: rw(18),
    marginHorizontal: rw(3),
  },
  col2: {
    flexDirection: 'row',
  },
  infoWrapper: {
    width: rw(150),
    marginTop: rh(15),
    marginEnd: rh(20),
  },
  labelInfo: {
    fontWeight: 'bold',
    fontSize: rf(14),
  },
  normalText: {
    fontSize: rf(13)
  },
});

export {Styles};
