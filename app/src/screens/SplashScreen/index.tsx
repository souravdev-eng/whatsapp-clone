import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {WhatsappText} from '../../styles/global.style';
import Loader from '../../components/Loader';

const SplashScreen = () => {
  let loading = true;
  return (
    <>
      <View style={styles.container}>
        <Loader />
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <WhatsappText>WhatsUp</WhatsappText>
      </View>
    </>
  );
};

export default SplashScreen;
