import React from 'react';
import {View, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {colors} from '../../constant/theme/colors';
import {AppTextSemiBold, Row} from '../../styles/global.style';
import ChatDetailHeader from '../../components/ChatDetailHeader';
import SenderMessageCard from '../../components/SenderMessageCard';
import ReceiverMessageCard from '../../components/ReceiverMessageCard';
// import CHAT_DATA from '../../assets/data/Message.data.json';
import CHAT_DATA_V2 from '../../assets/data/Message.data_v2.json';

const ChatDetailScreen = () => {
  return (
    <>
      <ChatDetailHeader />
      <FlatList
        style={styles.container}
        contentContainerStyle={{paddingHorizontal: 4}}
        ListHeaderComponent={() => (
          <View style={styles.todayContainer}>
            <AppTextSemiBold>Today</AppTextSemiBold>
          </View>
        )}
        data={CHAT_DATA_V2}
        renderItem={({item}) =>
          item.type === 'send' ? (
            <SenderMessageCard {...item} />
          ) : (
            <ReceiverMessageCard {...item} />
          )
        }
      />
      <View style={styles.footer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Type message..."
            style={styles.input}
            multiline
          />
          <Row>
            <TouchableOpacity>
              <Ionicons
                name="attach"
                size={26}
                color={colors.black}
                style={{marginRight: 4}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="camera-outline" size={26} color={colors.black} />
            </TouchableOpacity>
          </Row>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="mic" size={26} color={colors.green} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatDetailScreen;
