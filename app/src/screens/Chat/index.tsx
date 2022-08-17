import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {Row, AppTextSemiBold} from '../../styles/global.style';
import {colors} from '../../constant/theme/colors';
import styles from './styles';
import ChatTopTabBar from '../../navigation/ChatTopTabBar';

const ChatScreen = () => {
  return (
    <>
      <View style={styles.iconWrapper}>
        <AppTextSemiBold style={styles.title}>WhatsUp</AppTextSemiBold>
        <Row>
          <TouchableOpacity style={styles.iconBox}>
            <Ionicons
              name="ios-search-outline"
              size={22}
              color={colors.green}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Feather name="more-vertical" size={22} color={colors.green} />
          </TouchableOpacity>
        </Row>
      </View>
      <ChatTopTabBar />
    </>
  );
};

export default ChatScreen;
