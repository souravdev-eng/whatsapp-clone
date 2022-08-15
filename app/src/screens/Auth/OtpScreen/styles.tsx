import {StatusBar, StyleSheet} from 'react-native';
import {theme} from '../../../constant';
const {colors, fonts_Size, WIDTH} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.white,
    width: WIDTH,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 10,
  },
  buttonContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 8,
  },
  otpContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: '50%',
    marginTop: 20,
    alignSelf: 'center',
  },

  button: {
    width: WIDTH / 1.1,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts_Size.h5,
  },
});

export default styles;
