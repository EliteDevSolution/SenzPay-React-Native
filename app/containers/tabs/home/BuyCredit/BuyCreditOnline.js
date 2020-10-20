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
import ModalDropdown from 'react-native-modal-dropdown';
import DatePicker from 'react-native-datepicker';

import { connect } from 'react-redux';
import { WalletBalanceTopupRequest } from '../../../../actions/wallet';

import images from '../../../../const/images'; 

// create a component
class BuyCreditOnline extends Component {
  constructor(props) {
    super(props);
    const { user } = props;

    const now = new Date();
    var dateFormat = require('dateformat');
    let today = dateFormat(now, "yyyy-mm-dd");

    this.state = {
      bankIndex: -1,
      depositAmount: '',
      depositDate: today,
      depositTime: '00:00:00',
      phoneNumber: user.phone,
      name: user.first_name
    }
  }

  onSubmit = () => () => {
    const { bankIndex, depositAmount, depositDate, depositTime } = this.state;
    const { user, WalletBalanceTopupRequest } = this.props;
    const datetime = depositDate + ' ' + depositTime;
    WalletBalanceTopupRequest(user.email, user.uid, user.password, depositAmount, "SenzPay Manual CDM", datetime, "", 0)
    .then(res => {
      alert('Request')
    })
    .catch(err => alert(err))
  }

  onCancel = () => () => {
    this.props.navigation.goBack();
  }

  render() {
    const { bankIndex, depositAmount, depositDate, depositTime, phoneNumber, name } = this.state;

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

            <Text style={styles.headerText}>Buy Credits CDM/Online Transfer</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.lineItem}>
              <Text style={styles.itemLabel}>Select Bank:</Text>
              <ModalDropdown
                ref={ref => this.dropdown = ref}
                options={['Maybank', 'Public Bank']}
                style={styles.dropdownContainer}
                dropdownStyle={styles.dropdown}
                dropdownTextStyle={styles.bankText}
                onSelect={(index) => {
                  this.setState({bankIndex: JSON.parse(index)})
                }}
              >
                <View style={styles.dropdownInner}>
                  <Text style={styles.bankText}>{bankIndex === -1 ? '-Choose Bank-' : (bankIndex === 0 ? 'Maybank' : 'Public Bank')}</Text>
                </View>
              </ModalDropdown>
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => this.dropdown.show()}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.itemLabel}>Deposit Amount:</Text>
              <TextInput
                style={styles.itemTextInput}
                placeholder='Deposit Amount'
                placeholderTextColor='#4F4F4F'
                underlineColorAndroid='transparent'
                autoCapitalize='none'
                value={depositAmount}
                onChangeText={e => {this.setState({depositAmount: e})}}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.itemLabel}>Deposit Date:</Text>
              <DatePicker
                style={styles.dayPicker}
                customStyles={{
                  dateInput: {
                    position: 'absolute',
                    top: 0,
                    left: 5,
                    width: 120,
                    height: 25,
                    borderWidth: 0,
                    alignItems: 'flex-start'
                  },
                  dateIcon: {
                    position: 'absolute',
                    top: 0,
                    left: 90,
                    width: 20,
                    height: 20
                  }
                }}
                date={depositDate}
                mode="date"
                iconSource={images.pickerIconDate}
                format="YYYY-M-D"
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                onDateChange={(date) => { this.setState({ depositDate: date }) }}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.itemLabel}>Deposit Time:</Text>
              <DatePicker
                style={styles.dayPicker}
                customStyles={{
                  dateInput: {
                    position: 'absolute',
                    top: 0,
                    left: 5,
                    width: 120,
                    height: 25,
                    borderWidth: 0,
                    alignItems: 'flex-start'
                  },
                  dateIcon: {
                    position: 'absolute',
                    top: 0,
                    left: 90,
                    width: 20,
                    height: 20
                  }
                }}
                date={depositTime}
                mode="time"
                iconSource={images.pickerIconTime}
                format="HH:mm:ss"
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                onDateChange={(date) => { this.setState({ depositTime: date }) }}
              />
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.itemLabel}>Senzpay Login:</Text>
              <View style={styles.senzpayLogin}>
                {/* <Text style={styles.loginText}>{phoneNumber}</Text> */}
                <TextInput
                  style={styles.loginText}
                  placeholder='Full Name'
                  placeholderTextColor='#4F4F4F'
                  underlineColorAndroid='transparent'
                  autoCapitalize='none'
                  value={phoneNumber}
                  onChangeText={e => this.setState({ phoneNumber: e })}
                />
              </View>
            </View>
            <View style={styles.lineItem}>
              <Text style={styles.itemLabel}>Real Name:</Text>
              <TextInput
                style={styles.itemTextInput}
                placeholder='Full Name'
                placeholderTextColor='#4F4F4F'
                underlineColorAndroid='transparent'
                autoCapitalize='none'
                value={name}
                onChangeText={e => this.setState({name: e})}
              />
            </View>
            <View style={[styles.lineItem, {height: 30}]}>
              <Text style={styles.itemLabel}>Deposit Slip:</Text>
              <TouchableOpacity
                style={styles.chooseButton}
              >
                <ImageBackground
                  source={images.buttonBG4}
                  style={styles.chooseButtonImage}
                  resizeMode='contain'
                >
                  <Text style={styles.chooseButtonText}>Choose image</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <Image
              source={images.imagePlaceholder}
              style={styles.image}
              resizeMode='contain'
            />
            <Text style={styles.instruction}>Make sure Deposit Date & Time is correct.</Text>

            <View style={styles.buttonBox}>
              <TouchableOpacity
                style={{ marginRight: 12 }}
                onPress={this.onSubmit()}
              >
                <ImageBackground
                  source={images.buttonBG1}
                  style={styles.button}
                  resizeMode='stretch'
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.onCancel()}
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
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
  },
  lineItem: {
    width: '100%',
    height: 27,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: {
    width: 125,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Myriad-BoldItalic',
  },
  dropdownContainer: {
    width: 105,
    height: '100%',
    borderBottomWidth: 1,
    borderColor: '#242E36',
  },
  dropdown: {
    width: 120,
    height: 80
  },
  dropdownInner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  bankText: {
    color: '#4F4F4F',
    fontSize: 15,
    fontFamily: 'Myriad-Italic',
  },
  dropdownButton: {
    width: 15,
    height: '100%',
    borderBottomWidth: 10,
    borderBottomColor: '#231F20',
    borderLeftWidth: 15,
    borderLeftColor: 'transparent'
  },
  dayPicker: {
    width: 120,
    height: '100%',
    borderBottomWidth: 1,
    borderColor: '#242E36'
  },
  senzpayLogin: {
    width: 120,
    height: '100%',
    paddingLeft: 5,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#242E36',
  },
  loginText: {
    color: '#231F20',
    fontSize: 15,
  },
  itemTextInput: {
    flex: 1,
    height: '100%',
    borderBottomWidth: 1,
    borderColor: '#242E36',
    padding: 0,
    paddingLeft: 5,
    fontSize: 15,
    fontFamily: 'Myriad-Italic',
  },
  chooseButton: {
    height: 30,
    width: 120,
  },
  chooseButtonImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chooseButtonText: {
    color: '#231F20',
    fontSize: 15,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  },
  image: {
    width: '100%',
    height: 95,
    marginTop: 15,
    marginBottom: 15,
  },
  instruction: {
    color: '#545454',
    fontSize: 13,
    fontFamily: 'Myriad-Italic',
  },
  buttonBox: {
    flexDirection: 'row',
    marginTop: 7,
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
  }
});

const mapStateToProps = function (state) {
  const { user } = state;
  return {
    user: user.user
  }
};

//make this component available to the app
export default connect(mapStateToProps, { WalletBalanceTopupRequest })(BuyCreditOnline);
