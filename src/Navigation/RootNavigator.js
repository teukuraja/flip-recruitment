//@flow

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {TransactionListScreen, TransactionDetailScreen} from './Screen.config';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.TransactionListScreen}>
      <Stack.Screen
        name={Routes.TransactionListScreen}
        component={TransactionListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.TransactionDetailScreen}
        component={TransactionDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
