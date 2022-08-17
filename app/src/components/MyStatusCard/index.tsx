import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {AppText, AppTextSemiBold} from '../../styles/global.style';
import {colors} from '../../constant/theme/colors';

const MyStatusCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container} activeOpacity={0.7}>
        <View>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}}
            style={styles.avatar}
            resizeMode="contain"
          />
          <View style={styles.addIcon}>
            <Ionicons name="add-circle-sharp" size={20} color={colors.green} />
          </View>
        </View>

        <View style={styles.textContainer}>
          <AppTextSemiBold style={styles.title}>My Status</AppTextSemiBold>
          <AppText style={styles.subTitle}>Tap to add status update</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyStatusCard;
