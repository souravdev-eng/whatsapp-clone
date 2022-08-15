import {StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {HEIGHT, WIDTH, colors} = theme;

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 65,
    height: 55,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 8,
    color: '#000',
    backgroundColor: '#fff',
    elevation: 2,
  },

  underlineStyleHighLighted: {
    borderColor: colors.green,
  },
});

export default styles;
