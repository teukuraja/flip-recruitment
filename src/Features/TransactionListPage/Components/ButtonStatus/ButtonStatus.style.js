import {StyleSheet} from 'react-native';
import {rw, rbr, rh, rf} from '../../../../Utils/Layout.utils';
import {Colors} from '../../../../Themes';

const Styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    end: rw(12),
    borderRadius: rbr(6),
    paddingHorizontal: rw(8),
    paddingVertical: rh(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: rh(25),
    alignSelf: 'center',
  },
  buttonPending: {
    borderColor: Colors.FLIP_ORANGE,
    borderWidth: 2,
    borderRadius: rbr(4),
  },
  buttonSuccess: {
    backgroundColor: Colors.CARIBBEAN_GREEN,
    borderRadius: rbr(4),
  },
  buttonFailed: {
    borderColor: Colors.DARK_RED,
    borderWidth: 2,
    borderRadius: rbr(4),
  },
  text: {
    fontWeight: 'bold',
    fontSize: rf(11),
  },
  textSuccess: {
    color: Colors.WHITE,
  },
  textFailed: {
    color: Colors.BLACK,
  },
});

export {Styles};
