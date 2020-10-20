//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

import ReportButton from './ReportButton';

import images from '../../../const/images';

import { openDrawer } from '../../../global';

// create a component
class Home extends Component {
  viewReport = type => () => {
    this.props.navigation.navigate(type);
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
            style={styles.menuButton}
            onPress={() => openDrawer()}
          >
            <Image
              source={images.menu}
              style={styles.menuIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>

          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>

        <View style={styles.content}>
          <Text style={[styles.text, {marginBottom: 10}]}>Reports</Text>

          <ReportButton
            icon={images.reportTransaction}
            text='Transaction Report'
            onPress={this.viewReport('Transaction')}
          />

          <ReportButton
            icon={images.reportRebates}
            text='Rebates Report'
            onPress={this.viewReport('Rebates')}
          />

          <ReportButton
            icon={images.reportBuyCredits}
            text='Buy Credits Report'
            onPress={this.viewReport('BuyCredits')}
          />

          <ReportButton
            icon={images.reportTransferIn}
            text='Credit Transfer In Report'
            onPress={this.viewReport('TransferIn')}
          />

          <ReportButton
            icon={images.reportTransferOut}
            text='Credit Transfer Out Report'
            onPress={this.viewReport('TransferOut')}
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
  menuButton: {
    marginLeft: 15,
  },
  menuIcon: {
    width: 23,
    height: 23,
  },
  logo: {
    width: 100,
    height: 40,
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
    paddingTop: 7,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  }
});

//make this component available to the app
export default Home;
