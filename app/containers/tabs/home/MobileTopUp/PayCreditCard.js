//import liraries
import React, { Component } from 'react';
import {
  ScrollView,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { width, height } from 'react-native-dimension';
import CheckBox from 'react-native-check-box';

import images from '../../../../const/images';

const Line = () => (
  <View style={styles.line} />
)

// create a component
class PayCreditCard extends Component {
  onPayNow = () => () => {
    alert('pay now');
  }

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

            <Text style={styles.headerText}>Pay via Credit/Debit Card</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.payOptionButton}>
              <Text style={styles.payOptionButtonText}>Pay via saved card</Text>
              <Image
                source={images.forward}
                style={styles.rightArrow}
                resizeMode='contain'
              />
            </View>
            <Line />
            <View style={styles.payOptionButton}>
              <Text style={styles.payOptionButtonText}>Use Debit/Credit card</Text>
              <Image
                source={images.forward}
                style={styles.rightArrow}
                resizeMode='contain'
              />
            </View>

            <View style={styles.cardInfoContainer}>
              <View style={styles.cardInfoItem}>
                <View style={styles.cardInfoItemLeft}>
                  <Text style={styles.cardInfoItemBoldText}>Pay To:</Text>
                </View>
                <View style={styles.cardInfoItemRight}>
                  <Text style={styles.cardInfoItemBoldText}>SENZPAY (M) SDN BHD</Text>
                </View>
              </View>
              <View style={styles.cardInfoItem}>
                <View style={styles.cardInfoItemLeft}>
                  <Text style={styles.cardInfoItemBoldText}>Name on Card:</Text>
                </View>
                <View style={styles.cardInfoItemRight}>
                  <TextInput
                    style={styles.cardInfoItemInput}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>
              </View>
              <View style={styles.cardInfoItem}>
                <View style={styles.cardInfoItemLeft}>
                  <Text style={styles.cardInfoItemBoldText}>Card Number:</Text>
                </View>
                <View style={styles.cardInfoItemRight}>
                  <TextInput
                    style={styles.cardInfoItemInput}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                  <Text style={styles.cardInfoItemSmallText}>(without dash or space)</Text>
                </View>
              </View>
              <View style={[styles.cardInfoItem, {flex: 2.5}]}>
                <View style={styles.cardInfoItemLeft}>
                  <Text style={styles.cardInfoItemBoldText}>Expiry Date (MMYY):</Text>
                </View>
                <View style={styles.cardInfoItemRight}>
                  <TextInput
                    style={[styles.cardInfoItemInput, {width: 110}]}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>
              </View>
              <View style={styles.cardInfoItem}>
                <View style={[styles.cardInfoItemLeft, {flexDirection: 'row'}]}>
                  <Text style={styles.cardInfoItemBoldText}>CW2:</Text>
                  <Image
                    source={images.importantIcon}
                    style={styles.importantIcon}
                    resizeMode='contain'
                  />
                </View>
                <View style={styles.cardInfoItemRight}>
                  <TextInput
                    style={[styles.cardInfoItemInput, {width: 110}]}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>
              </View>
              {/* <View style={styles.cardInfoItem}>
                <View style={styles.cardInfoItemLeft}>
                  <Text style={styles.cardInfoItemBoldText}>Amount:</Text>
                </View>
                <View style={{flexDirection: 'row', width: 110, height: '100%'}}>
                  <Text style={[styles.cardInfoItemBoldText, {marginRight: 5}]}>RM</Text>
                  <TextInput
                    style={styles.cardInfoItemInput}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>
                <Text style={styles.cardInfoItemSmallText}>**minimum RM5</Text>
              </View> */}
              <View style={styles.cardInfoItem}>
                <View style={styles.cardInfoItemLeft}>
                  <Text style={styles.cardInfoItemBoldText}>Credit Card Fee:</Text>
                </View>
                <View style={styles.cardInfoItemRight}>
                  <Text style={styles.cardInfoItemNormalText}>2.50%</Text>
                </View>
              </View>
              <View style={[styles.cardInfoItem, {flex: 1.5}]}>
                <View style={styles.cardInfoItemLeft}>
                  <Text style={styles.cardInfoItemBoldText}>Rebates:</Text>
                </View>
                <View style={styles.cardInfoItemRight}>
                  <Text style={styles.cardInfoItemNormalText}>3.00% into your Senzpay Credit</Text>
                </View>
              </View>
            </View>

            <CheckBox
              style={styles.checkbox}
              onClick={() => {}}
              rightText='Save this card (Maximum 4 Cards can be saved)'
              rightTextStyle={{color: '#545454', fontSize: 13, fontFamily: 'Myriad-Italic'}}
              checkBoxColor='#747678'
            />

            <View style={styles.buttonBox}>
              <TouchableOpacity
                style={{ marginRight: 12 }}
                onPress={this.onPayNow()}
              >
                <ImageBackground
                  source={images.buttonBG1}
                  style={styles.button}
                  resizeMode='stretch'
                >
                  <Text style={styles.buttonText}>Pay Now</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
              >
                <ImageBackground
                  source={images.buttonBG1}
                  style={styles.button}
                  resizeMode='stretch'
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.statement}>
              <Image
                style={styles.secureIcon}
                source={images.secureIcon}
                resizeMode='contain'
              />
              <Text style={styles.statementText}>Your card details are secured via encryption</Text>
            </View>

            <View style={styles.cardTypeSelectContainer}>
              <Image
                source={images.cardPCIDSS}
                style={styles.cardTypeImage}
                resizeMode='contain'
              />
              <Image
                source={images.cardHackerSafe}
                style={styles.cardTypeImage}
                resizeMode='contain'
              />
              <Image
                source={images.cardVisa}
                style={styles.cardTypeImage}
                resizeMode='contain'
              />
              <Image
                source={images.cardMaster}
                style={styles.cardTypeImage}
                resizeMode='contain'
              />
            </View>
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 60,
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#777777'
  },
  payOptionButton: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  payOptionButtonText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  rightArrow: {
    width: 20,
    height: 20
  },
  cardInfoContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  cardInfoItem: {
    flex: 2,
    flexDirection: 'row',
  },
  cardInfoItemLeft: {
    width: 120,
    height: '100%',
  },
  cardInfoItemRight: {
    flex: 1
  },
  cardInfoItemBoldText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Myriad-BoldItalic',
  },
  cardInfoItemSmallText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Myriad-Italic',
  },
  cardInfoItemNormalText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Myriad-Italic',
  },
  cardInfoItemInput: {
    width: '100%',
    height: 18,
    padding: 0,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Myriad-Italic',
    borderBottomWidth: 1,
    borderBottomColor: '#242E36',
  },
  importantIcon: {
    width: 18,
    height: 18,
    marginLeft: 15,
  },
  checkbox: {
    width: '100%',
    height: 25,
  },
  buttonBox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    width: 130,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  },
  statement: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#242E36',
  },
  secureIcon: {
    width: 30,
    height: 18
  },
  statementText: {
    color: '#545454',
    fontSize: 14,
    fontFamily: 'Myriad-Italic',
  },
  cardTypeSelectContainer: {
    width: '100%',
    height: 30,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardTypeImage: {
    width: 50,
    height: 25,
  }
});

//make this component available to the app
export default PayCreditCard;
