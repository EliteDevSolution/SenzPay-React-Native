//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import images from '../const/images';

// create a component
class AboutScreen extends Component {
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

          <Text style={styles.headerText}>About</Text>
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={{padding: 15}}
          showsVerticalScrollIndicator={false}>
          <View style={{width: '100%'}}>
            <View style={styles.question}>
              <Text style={styles.title}>1) Why Senzpay?</Text>
              <Text style={styles.option}>
                - We are Asia's Premium Payment Gateway that you can 
                trust, handling more than 10 thousand Payment 
                Transactions (Daily) across countries in Asia.
              </Text>
              <Text style={styles.option}>
                - We stored all your Financial Information securely, 
                encrypted and protected with a 24/7 anti-fraud 
                monitoring back-end system.
              </Text>
              <Text style={styles.option}>
                - We work with local banks, so that you can use your 
                preferred debit / credit cards for eWallet Payment 
                Transactions.
              </Text>
              <Text style={[styles.option, styles.lastOption]}>
                - Shall there be any dispute in your Payment or Purchase 
                Transactions, you are protected by Senzpay Buyer's 
                Protection.
              </Text>
            </View>

            <View style={styles.question}>
              <Text style={styles.title}>2) How does Senzpay work?</Text>
              <Text style={styles.option}>
                - This App has a Direct-link to SenzPay Back-end Server 
                Architecture, allowing all kinds of Payment Transactions to 
                take place via our simple and beautifully designed 
                Graphical User Inerface.
              </Text>
              <Text style={styles.option}>
                - User can choose a Telco Prepaid Reload, a Bill Payment, 
                a Product Merchandise and makes the payment via the App.
              </Text>
              <Text style={[styles.option, styles.lastOption]}>
                - This App is also an electronic wallet (storing your real 
                funds or cash), allowing funds to be transferred from a 
                User to another User(P2P) or from a User to a Merchant 
                (B2C) as well.
              </Text>
            </View>

            <View style={styles.question}>
              <Text style={styles.title}>3) What are the banks linked to Senzpay?</Text>
              <Text style={styles.option}>
                - We currently support 2 Banks in Malaysia:-
              </Text>
              <View style={{marginBottom: 15}}>
                <Text style={[styles.option, {marginBottom: 0}]}>Bank Name: Maybank</Text>
                <Text style={[styles.option, {marginBottom: 0}]}>Bank Acct Name: SenzPay (M) Sdn Bhd</Text>
                <Text style={[styles.option, {marginBottom: 0}]}>Bank Acct No: 505082505173</Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text style={[styles.option, {marginBottom: 0}]}>Bank Name: Public Bank</Text>
                <Text style={[styles.option, {marginBottom: 0}]}>Bank Acct Name: SenzPay (M) Sdn Bhd</Text>
                <Text style={[styles.option, {marginBottom: 0}]}>Bank Acct No: 3208266610</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
    // padding: 15,
    backgroundColor: '#E1E1E1'
  },
  question: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 3,
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 12,
  },
  title: {
    color: 'black',
    fontFamily: 'Myriad-BoldItalic',
    fontSize: 17,
    marginBottom: 20,
  },
  option: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 16,
    marginBottom: 15,
  },
  lastOption: {
    marginBottom: 10,
  }
});

//make this component available to the app
export default AboutScreen;
