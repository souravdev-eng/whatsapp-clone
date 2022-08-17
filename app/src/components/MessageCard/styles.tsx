import {StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors, fonts_Size} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 6,
  },
  userContainer: {
    flex: 1,
    marginLeft: 6,
  },
  time: {
    alignItems: 'center',
  },
  unseenMsg: {
    backgroundColor: colors.green,
    borderRadius: 15,
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  unseenMsgTxt: {
    color: colors.white,
  },
  timeTxt: {
    color: colors.grey,
  },
  msg: {
    color: colors.grey,
    width: '90%',
  },
  name: {
    color: colors.black,
    width: '90%',
    fontSize: fonts_Size.h5,
  },
});

export default styles;
