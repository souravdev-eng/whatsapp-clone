import {StatusBar, StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {colors, fonts_Family, HEIGHT, fonts_Size, WIDTH} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    marginTop: 4,
  },
});

export default styles;
