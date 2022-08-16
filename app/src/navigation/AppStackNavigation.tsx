import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/Chat';

const Stack = createNativeStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
