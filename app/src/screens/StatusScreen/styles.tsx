import {StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    marginTop: 6,
  },
  subHeading: {
    color: colors.grey,
  },
});

export default styles;
