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
  TextInput,
} from 'react-native';
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SignUp } from '../../actions/user';

import images from '../../const/images';

// create a component
class SignUpScreen extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      password: '',
      showModal: false,
      success: false,
      msg: ''
    }
  }

  onCloseModal() {
    this.setState({showModal: false})
  }
  
  signup() {
    const { email, first_name, last_name, phone, password } = this.state;
    const { SignUp } = this.props;
    SignUp(email, first_name, last_name, phone, password)
    .then((msg) => {
      this.setState({showModal: true, success: true, msg})
    })
    .catch((msg) => {
      this.setState({showModal: true, success: false, msg: msg.substr(7)})
    })
  }
  
  render() {
    const { email, first_name, last_name, phone, password, showModal, success, msg } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.outerContainer} scrollEnabled={false}>
        <ImageBackground
          source={images.background1}
          style={styles.background}
          resizeMode='cover'
        >
          <KeyboardAwareScrollView>
          <View style={styles.innerContainer}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode='contain'
            />

            <View style={styles.customInput}>
              <Image
                source={images.email}
                style={styles.inputIcon}
                resizeMode='contain'
              />
              <TextInput
                style={styles.input}
                placeholder='EMAIL'
                value={email}
                placeholderTextColor='white'
                onChangeText={text => this.setState({ email: text })}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
              />
            </View>

            <View style={styles.customInput}>
              <Image
                source={images.username}
                style={styles.inputIcon}
                resizeMode='contain'
              />
              <TextInput
                style={styles.input}
                placeholder='FIRST NAME'
                value={first_name}
                placeholderTextColor='white'
                onChangeText={text => this.setState({ first_name: text })}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
              />
            </View>

            <View style={styles.customInput}>
              <Image
                source={images.username}
                style={styles.inputIcon}
                resizeMode='contain'
              />
              <TextInput
                style={styles.input}
                placeholder='LAST NAME'
                value={last_name}
                placeholderTextColor='white'
                onChangeText={text => this.setState({ last_name: text })}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
              />
            </View>

            <View style={styles.customInput}>
              <Image
                source={images.phone}
                style={styles.inputIcon}
                resizeMode='contain'
              />
              <TextInput
                style={styles.input}
                placeholder='PHONE'
                value={phone}
                placeholderTextColor='white'
                onChangeText={text => this.setState({ phone: text })}
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
                value={password}
                onChangeText={text => this.setState({ password: text })}
                underlineColorAndroid='transparent'
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={[styles.button, { marginTop: 20, marginBottom: 20, backgroundColor: 'white' }]}
              onPress={this.signup.bind(this)}
            >
              <Text style={styles.buttonText}>SIGNUP</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.linkText1}>Already have an account? </Text>
              <Text style={styles.linkText2}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAwareScrollView>
        </ImageBackground>

        <Modal
          isVisible={showModal}
        >
          <View style={styles.modal}>
            <Text style={styles.modalText1}>{success ? 'Sign-Up Success!' : 'Sign-Up Failed!'}</Text>
            <View style={styles.modalContent}>
              <Image
                source={success ? images.success : images.fail}
                style={styles.modalImage}
                resizeMode='contain'
              />
              {
                !success ?
                <Text style={styles.modalText2}>{msg}</Text>
                : null
              }
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
    alignItems: 'center',
  },
  innerContainer: {
    width: 240,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo: {
    width: '100%',
    height: 100,
    marginTop: 90,
    marginBottom: 30,
  },
  customInput: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: 'white',
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    width: 18,
    height: 22,
    marginRight: 35,
  },
  input: {
    flex: 1,
    padding: 0,
    color: 'white',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  loginButton: {
    flexDirection: 'row',
  },
  linkText1: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Myriad-Italic'
  },
  linkText2: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Myriad-BoldItalic'
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
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
  modal: {
    width: 260,
    height: 270,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText1: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 25,
    textAlign: 'center'
  },
  modalText2: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  modalContent: {
    width: '100%',
    minHeight: 140,
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    SignUp
  }, dispatch);
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(SignUpScreen);
