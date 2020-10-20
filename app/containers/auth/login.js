//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Modal from "react-native-modal";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginRequest } from '../../actions/user';

import images from '../../const/images';

// create a component
class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      // login_email: '',
      // login_password: '',
      login_email: 'vla_afansyev@mail.ru',
      login_password: 'password',
      isFetching: false,
      showError: false,
      errMsg: ''
    }
  }

  onCloseModal() {
    this.setState({showError: false})
  }

  login() {
    const { loginRequest } = this.props;
    const { login_email, login_password } = this.state;

    loginRequest(login_email, login_password);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      this.props.navigation.navigate('Main')
      return;
    }

    const { isFetching } = this.state;

    if (isFetching) {
      this.setState({showError: true, errMsg: nextProps.errorMsg});
    }
    this.setState({isFetching: nextProps.isFetching});
  }

  render() {
    const { login_email, login_password, showError, errMsg } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.outerContainer} scrollEnabled={false}>
        <ImageBackground
          source={images.background1}
          style={styles.background}
          resizeMode='cover'
        >
          <View style={styles.innerContainer}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode='contain'
            />

            <View style={styles.customInput}>
              <Image
                source={images.username}
                style={styles.inputIcon}
                resizeMode='contain'
              />
              <TextInput
                style={styles.input}
                placeholder='USERNAME'
                value={login_email}
                placeholderTextColor='white'
                onChangeText={text => this.setState({ login_email: text })}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
              />
            </View>

            <View style={styles.customInput}>
              <Image
                source={images.password}
                style={styles.inputIcon}
                resizeMode='contain'
              />
              <TextInput
                style={styles.input}
                placeholder='PASSWORD'
                placeholderTextColor='white'
                value={login_password}
                onChangeText={text => this.setState({ login_password: text })}
                underlineColorAndroid='transparent'
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={[styles.button, { marginTop: 50, backgroundColor: 'white' }]}
              onPress={this.login.bind(this)}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.forgotButton}
              onPress={() => this.props.navigation.navigate('Forgot')}
            >
              <Text style={styles.linkText1}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              <Text style={styles.linkText1}>NO ACCOUNT? </Text>
              <Text style={styles.linkText2}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <Modal
          isVisible={showError}
        >
          <View style={styles.modal}>
            <Text style={styles.modalText}>{errMsg}</Text>
            <View style={styles.modalContent}>
              <Image
                source={images.fail}
                style={styles.modalImage}
                resizeMode='contain'
              />
            </View>
            <TouchableOpacity
              onPress={this.onCloseModal.bind(this)}
            >
              <ImageBackground
                source={images.buttonBG1}
                style={styles.modalButton}
                resizeMode='stretch'
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingTop: 90,
    alignItems: 'center',
  },
  innerContainer: {
    width: 240,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo: {
    width: '100%',
    height: 100
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  button: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    borderWidth: 2.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  forgotButton: {
    marginTop: 25,
  },
  signupButton: {
    marginTop: 50,
    flexDirection: 'row',
  },
  linkText1: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Myriad-Italic'
  },
  linkText2: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Myriad-BoldItalic'
  },
  customInput: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: 'white',
    marginTop: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    width: 18,
    height: '100%',
    marginRight: 35,
  },
  input: {
    flex: 1,
    padding: 0,
    color: 'white',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  modal: {
    width: 260,
    height: 270,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 25,
    textAlign: 'center'
  },
  modalContent: {
    width: '100%',
    height: 140,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  modalImage: {
    width: 70,
    height: 70
  },
  modalButton: {
    width: 130,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Myriad-BoldItalic',
    backgroundColor: 'transparent'
  }
});

const mapStateToProps = function (state) {
  const { user } = state;
  return {
    isFetching: user.isFetching,
    errorMsg: user.errorMsg,
    isAuthenticated: user.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginRequest
  }, dispatch);
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
