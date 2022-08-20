import {StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors} = theme;

const styles = StyleSheet.create({
  todayContainer: {
    backgroundColor: colors.greyWhite,
    paddingHorizontal: 12,
    paddingVertical: 12,
    opacity: 0.7,
    marginVertical: 12,
    maxWidth: '80%',
    marginLeft: 8,
    borderBottomStartRadius: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  todayText: {
    color: colors.black,
    letterSpacing: 1,
    lineHeight: 20,
  },
  time: {
    position: 'absolute',
    bottom: 10,
    right: 4,
    marginHorizontal: 6,
    borderRadius: 6,
    color: colors.black,
  },
});

export default styles;
