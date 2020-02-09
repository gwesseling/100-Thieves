import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import stylevars from '_STYLES/stylevars';

import Main from '_COMPONENTS/entrypoints/Main';

function App(): ReactNode {
  return (
      <SafeAreaView style={{flex: 1}}>
          <StatusBar translucent backgroundColor={stylevars.statusBarColor} />
          <Main />
      </SafeAreaView>
  );
};

export default App;
