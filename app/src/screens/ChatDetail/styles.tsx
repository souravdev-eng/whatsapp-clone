import {StatusBar, StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors, fonts_Family, HEIGHT, fonts_Size, WIDTH} = theme;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: colors.white,
    flex: 1,
    // paddingBottom: '30%',
  },
  todayContainer: {
    backgroundColor: colors.greyWhite,
    paddingHorizontal: 12,
    borderRadius: 8,
    paddingVertical: 8,
    opacity: 0.6,
    marginVertical: 10,
    alignSelf: 'center',
  },
  footer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 4,
    paddingVertical: 10,
    alignItems: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '82%',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderColor: colors.grey,
  },
  input: {
    width: '70%',
  },
  iconContainer: {
    backgroundColor: colors.lightGreen,
    padding: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
});

export default styles;
