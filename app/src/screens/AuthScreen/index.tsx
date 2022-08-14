import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constant/theme/colors';
import {
  WhatsappText,
  AppTextSemiBold,
  AppText,
} from '../../styles/global.style';
import styles from './styles';

const AuthScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <WhatsappText>WhatsUp</WhatsappText>
        </View>
        <View style={styles.textInputContainer}>
          <AppTextSemiBold style={styles.signinText}>
            Sign in to your account
          </AppTextSemiBold>

          <AppTextSemiBold style={styles.requiredText}>
            Phone Number Required
          </AppTextSemiBold>

          <View style={styles.inputContainer}>
            <Feather name="phone" size={22} color={colors.grey} />
            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <LinearGradient
                angle={45}
                useAngle={true}
                colors={[colors.green, '#05cb7f']}
                angleCenter={{x: 0.5, y: 0.9}}
                style={styles.button}>
                <AppTextSemiBold style={styles.buttonText}>
                  Sign in
                </AppTextSemiBold>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;
