import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/Chat';
import ChatDetailScreen from '../screens/ChatDetail';
import Demo from '../../Demo';

const Stack = createNativeStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      {/* <Stack.Screen name="Demo" component={Demo} /> */}
      <Stack.Screen name="Home" component={ChatScreen} />
      <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
