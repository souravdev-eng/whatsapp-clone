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
  imgContainer: {
    backgroundColor: colors.greyWhite,
    paddingHorizontal: 6,
    paddingVertical: 6,
    opacity: 0.7,
    width: '80%',
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    // alignSelf: 'flex-end',
    marginLeft: 8,
    alignItems: 'center',
    height: 200,
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
