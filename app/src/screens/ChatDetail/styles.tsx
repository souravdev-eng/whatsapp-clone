import {StatusBar, StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors, fonts_Family, HEIGHT, fonts_Size, WIDTH} = theme;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 4,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  profileName: {
    fontSize: fonts_Size.h5,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.lightGreen,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
