import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Themes';

const Styles = StyleSheet.create({
  statusSuccess: {
    backgroundColor: Colors.CARIBBEAN_GREEN,
  },
  statusPending: {
    backgroundColor: Colors.FLIP_ORANGE,
  },
  statusFailed: {
    backgroundColor: Colors.DARK_RED,
  },
});

export {Styles};
