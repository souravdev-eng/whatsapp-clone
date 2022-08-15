import {StyleSheet} from 'react-native';
import {theme} from '../../../constant';
const {colors, fonts_Family, HEIGHT, fonts_Size, WIDTH} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logoContainer: {
    marginTop: HEIGHT * 0.1,
  },
  logo: {
    width: 90,
    height: 90,
  },
  textInputContainer: {
    position: 'absolute',
    bottom: '4%',
  },
  inputContainer: {
    width: WIDTH / 1.1,
    height: 52,
    borderWidth: 0.5,
    borderColor: colors.grey,
    marginVertical: 8,
    borderRadius: 26,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingLeft: 16,
    width: '90%',
    fontFamily: fonts_Family.SourceSansPro_SemiBold,
    fontSize: fonts_Size.medium,
    color: colors.black,
  },
  signinText: {
    fontSize: fonts_Size.h3,
    marginBottom: 36,
    alignSelf: 'center',
  },
  requiredText: {
    fontSize: fonts_Size.small,
    color: colors.grey,
    marginLeft: 6,
  },
  buttonContainer: {
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
