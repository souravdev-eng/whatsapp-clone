import React, {FC} from 'react';
import {View} from 'react-native';
import {AppText} from '../../styles/global.style';
import styles from './styles';

interface Props {
  message: any;
  time: string;
}

const ReceiverMessageCard: FC<Props> = ({message, time}) => {
  return (
    <View style={styles.todayContainer}>
      <View style={{width: '85%'}}>
        <AppText>{message}</AppText>
      </View>
      <AppText style={styles.time}>{time}</AppText>
    </View>
  );
};

export default ReceiverMessageCard;
