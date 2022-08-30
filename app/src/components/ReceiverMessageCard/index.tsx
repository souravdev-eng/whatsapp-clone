import React, {FC} from 'react';
import {View, Image} from 'react-native';
import {AppText} from '../../styles/global.style';
import styles from './styles';

interface Props {
  message: any;
  time: string;
  payloadType: any;
}

const ReceiverMessageCard: FC<Props> = ({message, time, payloadType}) => {
  return (
    <View
      style={
        payloadType === 'text' ? styles.todayContainer : styles.imgContainer
      }>
      {payloadType === 'text' && (
        <View style={{width: '85%'}}>
          <AppText>{message}</AppText>
        </View>
      )}
      {payloadType === 'image' && (
        <Image
          source={{uri: message.uri}}
          style={{
            width: '98%',
            height: '84%',
          }}
          resizeMode="cover"
        />
      )}
      <AppText style={styles.time}>{time}</AppText>
    </View>
  );
};

export default ReceiverMessageCard;
