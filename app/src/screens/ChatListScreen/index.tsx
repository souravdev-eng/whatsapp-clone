import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import MessageCard from '../../components/MessageCard';

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item}) => <MessageCard />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ChatListScreen;
