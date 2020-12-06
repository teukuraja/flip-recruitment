import {StyleSheet} from 'react-native';
import {Colors} from '../../Themes';

const Styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.FLIP_ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.NOBEL_GREY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: Colors.FLIP_ORANGE,
  },
});

export {Styles};
