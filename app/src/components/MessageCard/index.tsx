import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppText, AppTextBold} from '../../styles/global.style';

const MessageCard = () => {
  return (
    <TouchableOpacity style={styles.chatCard} activeOpacity={0.7}>
      <TouchableWithoutFeedback>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}}
          style={styles.avatar}
        />
      </TouchableWithoutFeedback>
      <View style={styles.userContainer}>
        <AppTextBold style={styles.name}>Sourav Majumdar</AppTextBold>
        <AppText style={styles.msg} numberOfLines={1}>
          I'm hopping you are alright 'm hopping you are alright
        </AppText>
      </View>
      <View style={styles.time}>
        <AppText style={styles.timeTxt}>20:03</AppText>
        <View style={styles.unseenMsg}>
          <AppText style={styles.unseenMsgTxt}>2</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageCard;
