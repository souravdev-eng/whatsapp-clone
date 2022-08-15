import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

import styles from './styles';

const Loader = () => {
  return (
    <>
      <View style={styles.loaderContainer}>
        <Lottie
          loop
          autoPlay
          source={require('../../assets/animation/loader.json')}
        />
      </View>
      <View style={styles.container}></View>
    </>
  );
};

export default Loader;
