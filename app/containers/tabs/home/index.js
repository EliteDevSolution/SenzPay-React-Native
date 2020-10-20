//import liraries
import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './home';
import MobileTopUpScreen from './MobileTopUp';
import MobileTopUpDetailScreen from './MobileTopUp/detail';
import MobileTopUpPaymentScreen from './MobileTopUp/payment';
import MobileTopUpResultScreen from './MobileTopUp/result';
import InternationalTopUpScreen from './InternationalTopUp';
import InternationalTopUpDetailScreen from './InternationalTopUp/detail';
import PayCreditCard from './MobileTopUp/PayCreditCard';
import PostpaidScreen from './Postpaid';
import PostpaidDetailScreen from './Postpaid/detail';
import UtilitiesScreen from './Utilities';
import UtilityDetailScreen from './Utilities/detail';
import BuyCredit from './BuyCredit';
import BuyCreditOnline from './BuyCredit/BuyCreditOnline';
import JomPayOnlineScreen from './BuyCredit/JomPayOnline';
import JomPayATMScreen from './BuyCredit/JomPayATM';
import CreditCardListScreen from './BuyCredit/CreditCardList';
import CreditCardAddScreen from './BuyCredit/CreditCardAdd';
import CreditTransfer from './CreditTransfer';

import { transitionConfig } from '../../../global';

const HomeNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  MobileTopUp: {
    screen: MobileTopUpScreen
  },
  MobileTopUpDetail: {
    screen: MobileTopUpDetailScreen
  },
  MobileTopUpPayment: {
    screen: MobileTopUpPaymentScreen
  },
  MobileTopUpResult: {
    screen: MobileTopUpResultScreen
  },
  InternationalTopUp: {
    screen: InternationalTopUpScreen
  },
  InternationalTopUpDetail: {
    screen: InternationalTopUpDetailScreen
  },
  PayCreditCard: {
    screen: PayCreditCard
  },
  Postpaid: {
    screen: PostpaidScreen
  },
  PostpaidDetail: {
    screen: PostpaidDetailScreen
  },
  Utilities: {
    screen: UtilitiesScreen
  },
  UtilityDetail: {
    screen: UtilityDetailScreen
  },
  BuyCredit: {
    screen: BuyCredit
  },
  BuyCreditOnline: {
    screen: BuyCreditOnline
  },
  JomPayOnline: {
    screen: JomPayOnlineScreen
  },
  JomPayATM: {
    screen: JomPayATMScreen
  },
  CreditCardList: {
    screen: CreditCardListScreen
  },
  CreditCardAdd: {
    screen: CreditCardAddScreen
  },
  CreditTransfer: {
    screen: CreditTransfer
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig
})

export default HomeNavigator;