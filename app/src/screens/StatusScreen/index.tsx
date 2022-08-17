import {View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppTextSemiBold} from '../../styles/global.style';

import MyStatusCard from '../../components/MyStatusCard';
import StatusCard from '../../components/StatusCard';

const StatusScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <MyStatusCard />
        <AppTextSemiBold style={styles.subHeading}>
          Recent updates
        </AppTextSemiBold>

        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <AppTextSemiBold style={styles.subHeading}>
          Viewed updates
        </AppTextSemiBold>
        <StatusCard active={false} />
        <StatusCard active={false} />
        <StatusCard active={false} />
        <StatusCard active={false} />
        <StatusCard active={false} />
      </View>
    </ScrollView>
  );
};

export default StatusScreen;
