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
  ScrollView,
  TextInput
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { width, height } from 'react-native-dimension';

import images from '../../../../const/images';

// create a component
class CreditCardAddScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.outerContainer} scrollEnabled={false}>
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

            <Text style={styles.headerText}>Credit Card</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.cardInfoContainer}>
              <View style={[styles.inputContainer, {width: '100%', marginBottom: 20}]}>
                <Image
                  source={images.cardIcon}
                  style={styles.inputIcon}
                  resizeMode='contain'
                />
                <TextInput
                  style={styles.textInput}
                  placeholder='Enter Card Number'
                  placeholderTextColor='#999'
                  keyboardType='number-pad'
                />
              </View>
              
              <Text style={[styles.text, {marginBottom: 10}]}>Valid Upto</Text>
              
              <View style={{height: 40, flexDirection: 'row', marginBottom: 30}}>
                <TextInput
                  style={[styles.textInput2, {marginRight: 7}]}
                  placeholder='MM'
                  placeholderTextColor='#999'
                  keyboardType='number-pad'
                />
                <TextInput
                  style={[styles.textInput2, {marginRight: 60}]}
                  placeholder='YY'
                  placeholderTextColor='#999'
                  keyboardType='number-pad'
                />
                <TextInput
                  style={styles.textInput2}
                  placeholder='CVV'
                  placeholderTextColor='#999'
                  keyboardType='number-pad'
                />
              </View>

              <View style={[styles.inputContainer, {width: '100%', marginBottom: 10}]}>
                <Image
                  source={images.userIcon}
                  style={styles.inputIcon}
                  resizeMode='contain'
                />
                <TextInput
                  style={styles.textInput}
                  placeholder='Card Holder Name'
                  placeholderTextColor='#999'
                />
              </View>

              <CheckBox
                style={styles.checkbox}
                onClick={() => {}}
                rightText='Save this card'
                rightTextStyle={{color: 'black', fontSize: 22, fontFamily: 'Myriad-Italic'}}
              />
            </View>
            <TouchableOpacity>
              <ImageBackground
                style={styles.payButton}
                source={images.buttonBG1}
                resizeMode='stretch'
              >
                <Text style={styles.payButtonText}>Pay</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  outerContainer: {
    width: width(100),
    height: height(100),
  },
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
    paddingHorizontal: 15,
  },
  cardInfoContainer: {
    width: '100%',
    marginVertical: 35,
    paddingTop: 30,
    paddingBottom: 25,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inputContainer: {
    height: 50,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  textInput: {
    width: '100%',
    height: '100%',
    fontFamily: 'Myriad-Italic',
    fontSize: 22,
  },
  textInput2: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#ddd',
    fontFamily: 'Myriad-Italic',
    fontSize: 22,
    textAlign: 'center'
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Myriad-Italic',
  },
  checkbox: {
    width: '100%',
    height: 25,
  },
  payButton: {
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  payButtonText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Myriad-Italic',
  }
});

//make this component available to the app
export default CreditCardAddScreen;
