import React from 'react';
import { Image, View, Keyboard } from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { width } from 'react-native-dimension';

import MenuScreen from './MenuScreen';
import ProfileScreen from './ProfileScreen';
import FAQScreen from './FAQScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

import HomeNavigator from './tabs/home';
import ShopingNaivgator from './tabs/shoping';
import ReportNavigator from './tabs/report';
import PromotionNavigator from './tabs/promotion';

import images from '../const/images';
import { transitionConfig, resetStackNavigation } from '../global';

const createDrawerNavigator = navigator => DrawerNavigator({
  Screen: {
    screen: navigator,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    }
  }
}, {
  drawerWidth: width(90),
  drawerLockMode: 'locked-closed',
  contentComponent: MenuScreen
});

const TabNav = TabNavigator({
  HOME: {
    screen: HomeNavigator
  },
  SHOPING: {
    screen: ShopingNaivgator
  },
  REPORT: {
    screen: ReportNavigator
  },
  PROMOTION: {
    screen: PromotionNavigator
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#7B7B7B',
    style: {
      height: 60,
      backgroundColor: '#242E36'
    },
    tabStyle: {
      padding: 5
    },
    labelStyle: {
      fontSize: 9,
      fontFamily: 'Gilroy-Light'
    }
  },
  initialRouteName: 'HOME',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let icon;
      if (routeName === 'HOME') {
        icon = focused ? images.homeActive : images.homeInactive
      } else if (routeName === 'SHOPING') {
        icon = focused ? images.shopingActive : images.shopingInactive
      } else if (routeName === 'REPORT') {
        icon = focused ? images.reportActive : images.reportInactive
      } else if (routeName === 'PROMOTION') {
        icon = focused ? images.promotionActive : images.promotionInactive
      }

      return <Image source={icon} style={{width: 27, height: 27}} resizeMode='contain' />;
    },
    tabBarOnPress: ({previousScene, scene, jumpToIndex}) => {
      const prevRouteName = previousScene.routeName;
      let index = 0;
      if (prevRouteName === 'SHOPING') {
        index = 1;
      } else if (prevRouteName === 'REPORT') {
        index = 2;
      } else if (prevRouteName === 'PROMOTION') {
        index = 3;
      }
      resetStackNavigation(index)
      jumpToIndex(scene.index)
      Keyboard.dismiss();
    }
  }),
})

const Main = StackNavigator({
  Main: {
    screen: createDrawerNavigator(TabNav),
  },
  Profile: {
    screen: ProfileScreen,
  },
  FAQ: {
    screen: FAQScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Contact: {
    screen: ContactScreen,
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  },
  transitionConfig,
})

export default Main;
