//import liraries
import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './home';
import TransactionReport from './TransactionReport';
import RebatesReport from './RebatesReport';
import BuyCreditsReport from './BuyCreditsReport';
import TransferInReport from './TransferInReport';
import TransferOutReport from './TransferOutReport';

import { transitionConfig } from '../../../global';

const ReportNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Transaction: {
    screen: TransactionReport
  },
  Rebates: {
    screen: RebatesReport
  },
  BuyCredits: {
    screen: BuyCreditsReport
  },
  TransferIn: {
    screen: TransferInReport
  },
  TransferOut: {
    screen: TransferOutReport
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig
})

export default ReportNavigator;