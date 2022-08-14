import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {WhatsappText} from '../../styles/global.style';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <WhatsappText>WhatsUp</WhatsappText>
    </View>
  );
};

export default SplashScreen;
