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
  TextInput,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import { width, height } from 'react-native-dimension';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EWalletTransfer } from '../../../actions/wallet';
import { UpdateBalance } from '../../../actions/user';

import images from '../../../const/images';

import {
  updateStackNavigation
} from '../../../global';

// create a component
class CreditTransfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      width: 0,
      toemail: '',
      amount: '',
    };

    updateStackNavigation(props.navigation, 0);
  }

  onLayout({nativeEvent}) {
    const { width } = nativeEvent.layout;
    this.setState({ width: width })
  }

  onSubmit() {
    Keyboard.dismiss();

    this.setState({loading: true});

    const { toemail, amount } = this.state;
    const { user, EWalletTransfer, UpdateBalance } = this.props;

    const amt = parseInt(amount);
    if (isNaN(amt)) {
      alert('Amount is not valid!');
      return;
    }

    EWalletTransfer(user.email, user.password, amt, toemail)
    .then((newBal) => {
      this.setState({loading: false});
      const nBal = parseInt(newBal);
      UpdateBalance(nBal);
      alert('Wallet Transfer is Successful')
      this.props.navigation.goBack();
    })
    .catch(err => {
      this.setState({ loading: false });
      alert(err)
    })
  }

  render() {
    const { loading, toemail, amount } = this.state;
    const { user } = this.props;

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

            <Text style={styles.headerText}>Credit Transfer</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.label}>Balance Credit</Text>
            <View style={styles.amountView}>
              <Text style={styles.amountText}>MYR {user.Bal}</Text>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.transferToInput}>
                <Text onLayout={this.onLayout.bind(this)} style={styles.inputLabel}>Transfer To:</Text>
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid='transparent'
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={toemail}
                  onChangeText={(e) => this.setState({toemail: e})}
                />
                <Image
                  source={images.creditTransferContactIcon}
                  style={styles.contactIcon}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.amountInput}>
                <Text style={[styles.inputLabel, {width: this.state.width, textAlign: 'right'}]}>Amount:</Text>
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid='transparent'
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={amount}
                  onChangeText={(e) => this.setState({amount: e})}
                />
              </View>
            </View>

            <View style={styles.buttonBox}>
              <TouchableOpacity
                style={{ marginRight: 12 }}
                onPress={this.onSubmit.bind(this)}
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
                onPress={() => this.props.navigation.goBack()}
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
        </ImageBackground>
        {
          loading ?
          <View style={styles.loadingPanel}>
            <ActivityIndicator size='large' color='#000' />
          </View>
          : null
        }
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
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
  },
  label: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  amountView: {
    width: 240,
    height: 40,
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: '#232D36',
    alignItems: 'center',
    justifyContent: 'center'
  },
  amountText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Myriad-Roman',
  },
  inputContainer: {
    marginTop: 40,
    width: 225,
  },
  transferToInput: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    marginRight: 3,
    color: 'black',
    fontSize: 13,
    fontFamily: 'Myriad-Italic',
  },
  textInput: {
    flex: 1,
    height: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#242E36',
    padding: 0,
  },
  contactIcon: {
    width: 20,
    height: 25,
    marginLeft: 5,
  },
  amountInput: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonBox: {
    flexDirection: 'row',
    marginTop: 45,
  },
  button: {
    width: 130,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  },
  loadingPanel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0004',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100,
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
    EWalletTransfer,
    UpdateBalance
  }, dispatch);
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(CreditTransfer);
