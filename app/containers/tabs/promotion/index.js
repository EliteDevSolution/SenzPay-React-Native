//import liraries
import React from 'react';
import { StackNavigator } from 'react-navigation';

import PromotionListScreen from './PromotionListScreen';
import PromotionDetailScreen from './PromotionDetailScreen';

import { transitionConfig } from '../../../global';

const PromotionNavigator = StackNavigator({
  Home: {
    screen: PromotionListScreen
  },
  Detail: {
    screen: PromotionDetailScreen
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig
})

export default PromotionNavigator;