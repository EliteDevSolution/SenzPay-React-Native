//import liraries
import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './home';
import CategoryScreen from './category';

import { transitionConfig } from '../../../global';

const ShopingNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Category: {
    screen: CategoryScreen
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig
})

export default ShopingNavigator;