/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {AppStatusBar} from './src/Components';
import {Colors} from './src/Themes';
import {getStore} from './src/Redux/Store';
import RootNavigator from './src/Navigation/RootNavigator';

const store = getStore();

const APP_THEME = Colors.MINT_CREAM;

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={Style.mainApp}>
      <AppStatusBar backgroundColor={APP_THEME} barStyle="dark-content" />
      <StoreProvider store={store}>
        <RootNavigator />
      </StoreProvider>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  mainApp: {
    flex: 1,
    backgroundColor: APP_THEME,
  },
});

export default App;
