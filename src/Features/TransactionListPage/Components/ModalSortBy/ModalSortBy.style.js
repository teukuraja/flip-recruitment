import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Themes';
import {rbr, rw, rh, rf, WIDTH} from '../../../../Utils/Layout.utils';

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: (WIDTH - (312 / 360) * WIDTH) / 2,
    marginVertical: 0,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: rbr(8),
    paddingHorizontal: rw(18),
    paddingVertical: rw(30),
    maxHeight: rh(260),
    justifyContent: 'center',
  },
  radioContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: rh(10),
    marginHorizontal: rw(8)
  },
  radioText: {
    marginLeft: rw(14),
    fontSize: rf(15),
  },
});

export {Styles};
