/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import stylevars from '_STYLES/stylevars';

import Main from '_COMPONENTS/entrypoints/Main';

const App: () => React$Node = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
          <StatusBar translucent backgroundColor={stylevars.statusBarColor} />
          <Main />
      </SafeAreaView>
  );
};

export default App;
