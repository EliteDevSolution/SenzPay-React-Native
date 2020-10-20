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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MakePaymentViaWalletRequest } from '../../../../actions/wallet';
import { NavigationActions } from 'react-navigation';
import { width, height } from 'react-native-dimension';

import images from '../../../../const/images';

// create a component
class MobileTopUpPaymentScreen extends Component {
  constructor(props) {
    super(props);
  }

  goBack = () => () => {
    const backAction = NavigationActions.back({
      key: this.props.navigation.state.params.key,
    });
    this.props.navigation.dispatch(backAction);
  }

  payViaWallet() {
    const { amount } = this.props.navigation.state.params;
    const { user, MakePaymentViaWalletRequest } = this.props;
    MakePaymentViaWalletRequest(user.email, user.password, amount)
      .then((newBal) => {
        const nBal = parseInt(newBal);
        UpdateBalance(nBal);
        alert('Wallet Payment is Succssful!')
        this.props.navigation.navigate('MobileTopUpResult');
      })
      .catch(err => {
        alert(err);
      })
  }

  render() {
    const { product, amount, phone } = this.props.navigation.state.params;

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
              onPress={this.goBack()}
            >
              <Image
                source={images.back}
                style={styles.headerLeftIcon}
                resizeMode='contain'
              />
            </TouchableOpacity>

            <Text style={styles.headerText}>Mobile Top Up</Text>
          </View>

          <View style={styles.content}>
            <ImageBackground
              source={images.buttonBG2}
              style={styles.productImageBG}
              resizeMode='contain'
            >
              <Image
                source={{ uri: product.imagepath }}
                style={styles.productImage}
                resizeMode='contain'
              />
              <Text style={styles.productName}>{product.Name}</Text>
            </ImageBackground>

            <View style={styles.infoView}>
              <Text style={styles.label}>Amount :  </Text>
              <Text style={styles.value}>RM {amount.toFixed(2)}</Text>
            </View>

            <View style={styles.infoView}>
              <Text style={styles.label}>Phone :  </Text>
              <Text style={styles.value}>{phone}</Text>
            </View>

            <TouchableOpacity
              style={[styles.button, {marginTop: 30}]}
              onPress={this.payViaWallet.bind(this)}
            >
              <ImageBackground
                source={images.buttonBG3}
                style={styles.buttonImage}
                resizeMode='stretch'
              >
                <Text style={styles.buttonText}>Confirm & Pay using Senzpay Credit</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('PayCreditCard')}
            >
              <ImageBackground
                source={images.buttonBG3}
                style={styles.buttonImage}
                resizeMode='stretch'
              >
                <Text style={styles.buttonText}>Confirm & Pay via Credit/Debit Card</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.goBack()}
            >
              <ImageBackground
                source={images.buttonBG1}
                style={styles.cancelButtonImage}
                resizeMode='stretch'
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
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
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
  },
  productImageBG: {
    width: 100,
    height: 100,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    paddingBottom: 10,
  },
  productImage: {
    width: 65,
    height: 45,
    marginBottom: 7,
  },
  productName: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  value: {
    color: 'black',
    fontSize: 21,
    fontFamily: 'Myriad-Roman',
  },
  button: {
    width: '100%'
  },
  buttonImage: {
    width: '100%',
    height: 70,
    paddingBottom: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  },
  cancelButtonImage: {
    marginTop: 10,
    width: 130,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButtonText: {
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    MakePaymentViaWalletRequest
  }, dispatch);
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(MobileTopUpPaymentScreen);
