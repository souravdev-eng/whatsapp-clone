import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../../constant/theme/colors';
import {AppTextSemiBold, AppText} from '../../../styles/global.style';
import styles from './styles';
import OtpInput from '../../../components/OtpInput';

const OtpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons
          name="md-arrow-back-sharp"
          size={22}
          color={colors.green}
          style={styles.icon}
        />
        <AppTextSemiBold>Enter OTP Code</AppTextSemiBold>
      </View>
      <View style={styles.otpContainer}>
        <AppText>Code has been send to +9170******90</AppText>
        <OtpInput />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <LinearGradient
            angle={45}
            useAngle={true}
            colors={[colors.green, '#05cb7f']}
            angleCenter={{x: 0.5, y: 0.9}}
            style={styles.button}>
            <AppTextSemiBold style={styles.buttonText}>Sign in</AppTextSemiBold>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;
