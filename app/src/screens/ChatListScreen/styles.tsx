import {StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors, fonts_Family, HEIGHT, fonts_Size, WIDTH} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  newChatButton: {
    position: 'absolute',
    backgroundColor: colors.green,
    width: 56,
    height: 56,
    bottom: 30,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});

export default styles;
