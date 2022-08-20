import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {colors} from '../../constant/theme/colors';
import {AppTextSemiBold} from '../../styles/global.style';

const ChatDetailHeader = () => {
  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={20} color={colors.green} />
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}}
          style={styles.profileImage}
        />
      </TouchableWithoutFeedback>
      <AppTextSemiBold style={styles.profileName}>John Doe</AppTextSemiBold>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconBox}>
          <Ionicons name="call-outline" size={20} color={colors.green} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Ionicons name="videocam-outline" size={20} color={colors.green} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Entypo name="dots-three-vertical" size={20} color={colors.green} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetailHeader;
