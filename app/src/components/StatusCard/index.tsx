import React, {FC} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {AppText, AppTextSemiBold} from '../../styles/global.style';
import styles from './styles';

interface Props {
  active?: boolean;
}

const StatusCard: FC<Props> = ({active = true}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} activeOpacity={0.7}>
        <View
          style={active ? styles.imageWrapper : styles.imageWrapperDeactivate}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350&auto=compress&cs=tinysrgb',
            }}
            style={styles.avatar}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <AppTextSemiBold style={styles.title}>Dipa Majumdar</AppTextSemiBold>
          <AppText style={styles.subTitle}>12 minutes ago</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StatusCard;
