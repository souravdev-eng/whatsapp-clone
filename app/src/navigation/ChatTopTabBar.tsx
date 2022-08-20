import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatListScreen from '../screens/ChatListScreen';
import StatusScreen from '../screens/StatusScreen';
import CallScreen from '../screens/CallScreen';

import {fonts_Family, fonts_Size} from '../constant/theme/fonts';
import {colors} from '../constant/theme/colors';

const Tab = createMaterialTopTabNavigator();

const ChatTopTabBar = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.grey,
        tabBarBounces: false,
        tabBarPressOpacity: 1,
        tabBarLabelStyle: {
          fontSize: fonts_Size.medium,
          fontFamily: fonts_Family.SourceSansPro_SemiBold,
        },
        tabBarPressColor: 'transparent',
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.grey,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.green,
          height: 3,
          borderRadius: 6,
        },
      }}
      initialRouteName="Chats">
      <Tab.Screen name="Chats" component={ChatListScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Call" component={CallScreen} />
    </Tab.Navigator>
  );
};

export default ChatTopTabBar;
