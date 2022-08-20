import {StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreen,
    paddingHorizontal: 12,
    paddingVertical: 14,
    opacity: 0.7,
    marginVertical: 10,
    width: '80%',
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    alignSelf: 'flex-end',
    marginRight: 8,
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
