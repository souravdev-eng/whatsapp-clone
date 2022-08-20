import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageCard from '../../components/MessageCard';
import styles from './styles';

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item}) => <MessageCard />}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.newChatButton}>
        <Ionicons name="md-chatbox-ellipses-sharp" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatListScreen;
