import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import stylevars from '_STYLES/stylevars';
import 'react-native-gesture-handler';

import Home from '_COMPONENTS/pages/Home';
import About from '_COMPONENTS/pages/About';
import Teams from '_COMPONENTS/pages/Teams';
import Creators from '_COMPONENTS/pages/Creators';
import Players from '_COMPONENTS/pages/Players';

const Drawer = createDrawerNavigator(
  {
    Home,
    About,
    Teams,
    Creators,
    Players
  },
  {
    drawerBackgroundColor: stylevars.primaryColor,
    overlayColor: 'rgba(0,0,0, .3)',
    hideStatusBar: true,
    statusBarAnimation: true,
    contentOptions: {
      activeTintColor: stylevars.secondaryColor,
      inactiveTintColor: stylevars.textColor,
      itemsContainerStyle: {
       
      },
      labelStyle: {
        fontSize: 16,
        textTransform: 'uppercase'
      }
    }
  }
);

// TODO: router enum
const Router = createAppContainer(
  createSwitchNavigator({
    Main: Drawer
  })
);

export default Router;