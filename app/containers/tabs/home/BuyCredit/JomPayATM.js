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
import { width, height } from 'react-native-dimension';

import images from '../../../../const/images';

// create a component
class JomPayATMScreen extends Component {
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

          <Text style={styles.headerText}>JomPAY with ATM</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.contentTop}>
            <Text style={[styles.contentBoldText, {marginBottom: 5}]}>SENZPAY</Text>
            <Text style={[styles.contentBoldText, {marginBottom: 5}]}>Biller Code : 66886</Text>
            <Text style={styles.contentBoldText}>Ref1 :</Text>
          </View>

          <Text style={[styles.contentBoldText, {marginVertical: 5}]}>STEPS :</Text>

          <ScrollView style={styles.stepsView}>
            <View style={styles.stepView}>
              <View style={styles.stepInnerView}>
                <Text style={styles.contentNormalText}>Insert Card</Text>
              </View>
              <View style={styles.stepIndexCircle}>
                <Text style={styles.stepIndexText}>1</Text>
              </View>
            </View>

            <View style={styles.stepView}>
              <View style={styles.stepInnerView}>
                <Text style={styles.contentNormalText}>Key in the ATM PIN</Text>
              </View>
              <View style={styles.stepIndexCircle}>
                <Text style={styles.stepIndexText}>2</Text>
              </View>
            </View>

            <View style={styles.stepView}>
              <View style={styles.stepInnerView}>
                <Text>
                  <Text style={styles.contentNormalText}>Select "</Text>
                  <Text style={styles.contentBoldText}>PAY BILLS</Text>
                  <Text style={styles.contentNormalText}>" at the main menu</Text>
                </Text>
              </View>
              <View style={styles.stepIndexCircle}>
                <Text style={styles.stepIndexText}>3</Text>
              </View>
            </View>

            <View style={styles.stepView}>
              <View style={styles.stepInnerView}>
                <Text style={{textAlign: 'center'}}>
                  <Text style={styles.contentNormalText}>Select "</Text>
                  <Text style={styles.contentBoldText}>SenzPay</Text>
                  <Text style={styles.contentNormalText}>" at the pay bills menu</Text>
                </Text>
              </View>
              <View style={styles.stepIndexCircle}>
                <Text style={styles.stepIndexText}>4</Text>
              </View>
            </View>

            <View style={styles.stepView}>
              <View style={styles.stepInnerView}>
                <Text>
                  <Text style={styles.contentNormalText}>Select "</Text>
                  <Text style={styles.contentBoldText}>SenzPay Bill Payments.</Text>
                  <Text style={styles.contentNormalText}>"</Text>
                </Text>
              </View>
              <View style={styles.stepIndexCircle}>
                <Text style={styles.stepIndexText}>5</Text>
              </View>
            </View>

            <View style={styles.stepView}>
              <View style={styles.stepInnerView}>
                <Text style={{textAlign: 'center'}}>
                  <Text style={styles.contentNormalText}>Select "</Text>
                  <Text style={styles.contentBoldText}>YES</Text>
                  <Text style={styles.contentNormalText}>" to agree</Text>
                </Text>
                <Text style={styles.contentNormalText}>Terms and Conditions</Text>
              </View>
              <View style={styles.stepIndexCircle}>
                <Text style={styles.stepIndexText}>6</Text>
              </View>
            </View>
          </ScrollView>
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#E1E1E1'
  },
  contentTop: {
    width: width(100) - 30,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  contentBoldText: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Myriad-BoldItalic',
  },
  contentNormalText: {
    color: 'black',
    fontSize: 19,
    fontFamily: 'Myriad-Italic',
  },
  stepsView: {
    flex: 1,
    width: '100%',
  },
  stepView: {
    paddingTop: 10,
    paddingLeft: 26,
  },
  stepInnerView: {
    flex: 1,
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stepIndexCircle: {
    position: 'absolute',
    top: 2,
    left: 0,
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#888',
    transform: [
      {scaleY: 1.1}
    ],
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepIndexText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  }
});

//make this component available to the app
export default JomPayATMScreen;
