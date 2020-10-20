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
  TextInput,
  ScrollView
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { width, height } from 'react-native-dimension';

import images from '../../../../const/images';

// create a component
class InternationalTopUpDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = () => () => {
    alert('InternatinalTopUp Submit');
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

            <Text style={styles.headerText}>International Top Up</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.detailPage}>
              <ImageBackground
                source={images.buttonBG2}
                style={styles.productImageBG}
                resizeMode='contain'
              >
              </ImageBackground>
              <TextInput
                style={styles.amountInput}
                underlineColorAndroid='transparent'
                keyboardType='numeric'
              />
              <Text style={styles.productText}>in MYR 24.50</Text>

              <Text style={styles.mobileNumberText}>Mobile Number</Text>
              <View style={styles.mobileNumberView}>
                <Text style={styles.phoneCode}>+86</Text>
                <TextInput
                  style={styles.mobileInput}
                  underlineColorAndroid='transparent'
                />
                <Image
                  source={images.creditTransferContactIcon}
                  style={styles.contactIcon}
                  resizeMode='contain'
                />
              </View>

              <TextInput
                style={styles.invoiceInput}
                placeholder='Send Invoice to (optional)'
                placeholderTextColor='black'
                underlineColorAndroid='transparent'
                autoCapitalize='none'
              />

              <View style={styles.buttonBox}>
                <TouchableOpacity
                  style={{ marginRight: 12 }}
                  onPress={this.onSubmit()}
                >
                  <ImageBackground
                    source={images.buttonBG4}
                    style={styles.button}
                    resizeMode='stretch'
                  >
                    <Text style={styles.buttonText}>Submit</Text>
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                >
                  <ImageBackground
                    source={images.buttonBG4}
                    style={styles.button}
                    resizeMode='stretch'
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
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

    backgroundColor: '#E1E1E1',
    alignItems: 'center',
  },
  detailPage: {
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },
  productImageBG: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    marginBottom: 25,
  },
  amountInput: {
    width: '80%',
    height: 38,
    borderRadius: 19,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Myriad-Roman',
    color: 'black',
    padding: 0,
  },
  mobileNumberText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Myriad-Italic',
  },
  mobileNumberView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneCode: {
    color: 'black',
    fontFamily: 'Myriad-Roman',
    fontSize: 20,
  },
  mobileInput: {
    width: 120,
    height: 25,
    padding: 0,
    borderBottomWidth: 1,
    borderColor: '#242E36',
    fontSize: 16,
    fontFamily: 'Myriad-Italic',
    textAlign: 'center'
  },
  contactIcon: {
    width: 22,
    height: 27,
    marginLeft: 10,
  },
  invoiceInput: {
    width: 200,
    height: 25,
    padding: 0,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#242E36',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    textAlign: 'center'
  },
  buttonBox: {
    flexDirection: 'row',
    marginTop: 40,
  },
  button: {
    width: 130,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  }
});

//make this component available to the app
export default InternationalTopUpDetailScreen;
