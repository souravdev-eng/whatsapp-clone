import {StatusBar, StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors, fonts_Family, HEIGHT, fonts_Size, WIDTH} = theme;

const styles = StyleSheet.create({
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: fonts_Size.h2,
  },
  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: colors.lightGreen,
    borderRadius: 12,
    marginLeft: 16,
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
