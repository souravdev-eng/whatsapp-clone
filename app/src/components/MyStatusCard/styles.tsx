import {StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors, fonts_Size} = theme;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 16,
  },
  title: {
    fontSize: fonts_Size.h5,
  },
  subTitle: {
    color: colors.grey,
  },
  addIcon: {
    position: 'absolute',
    backgroundColor: colors.white,
    zIndex: 1,
    borderRadius: 13,
    bottom: 6,
    right: -4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    elevation: 5,
    paddingHorizontal: 2,
  },
});

export default styles;
