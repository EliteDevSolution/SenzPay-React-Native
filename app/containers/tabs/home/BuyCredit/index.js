//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';

import BuyCreditButton from './BuyCreditButton';

import images from '../../../../const/images';

import {
  updateStackNavigation
} from '../../../../global';

// create a component
class BuyCredit extends Component {
  constructor(props) {
    super(props);

    updateStackNavigation(props.navigation, 0);
  }

  render() {
    return (
      <ImageBackground
        source={images.background2}
        style={styles.container}
        resizeMode='cover'
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerLeftButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <Image
              source={images.back}
              style={styles.headerLeftIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>Buy Credit</Text>
        </View>

        <View style={styles.content}>
          <BuyCreditButton
            icon={images.buycreditJomPay}
            text='JomPay (Online Transfer)'
            onPress={() => this.props.navigation.navigate('JomPayOnline')}
          />
          <BuyCreditButton
            icon={images.buycreditJomPay}
            text='JomPay (with ATM Card)'
            onPress={() => this.props.navigation.navigate('JomPayATM')}
          />
          <BuyCreditButton
            icon={images.buycreditCreditCard}
            text='Credit Card'
            onPress={() => this.props.navigation.navigate('CreditCardList')}
          />
          <BuyCreditButton
            icon={images.buycreditManual}
            text='Manual Online Transfer/CDM'
            onPress={() => this.props.navigation.navigate('BuyCreditOnline')}
          />
        </View>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({ ios: 20 }),
    backgroundColor: 'transparent'
  },
  header: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftButton: {
    marginLeft: 12,
    marginRight: 12,
  },
  headerLeftIcon: {
    width: 20,
    height: 20
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Myriad-Italic',
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

//make this component available to the app
export default BuyCredit;
