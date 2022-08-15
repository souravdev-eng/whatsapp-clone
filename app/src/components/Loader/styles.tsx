import {StyleSheet} from 'react-native';
import {theme} from '../../constant';
const {HEIGHT, WIDTH} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000',
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    height: HEIGHT,
    width: WIDTH,
  },
  loaderContainer: {
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 8,
    top: '35%',
  },
});

export default styles;
