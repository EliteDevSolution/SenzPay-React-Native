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
import { ForgotPassword } from '../../actions/user';

import images from '../../const/images';

// create a component
class ForgotScreen extends Component {
  constructor() {
    super();

    this.state={
      email: '',
      showModal: false,
      success: false
    };
  }

  onContinue = () => () => {
    const { email } = this.state;
    const { ForgotPassword } = this.props;
    ForgotPassword(email)
    .then(() => {
      this.setState({ showModal: true, success: true });
    })
    .catch(() => {
      this.setState({ showModal: true, success: false });
    })
  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { email, showModal, success } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.outerContainer} scrollEnabled={false}>
        <ImageBackground
          source={images.background1}
          style={styles.background}
          resizeMode='cover'
        >
          <View style={styles.innerContainer1}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode='contain'
            />
            <Text style={[styles.whiteText, {marginTop: 55}]} numberOfLines={2}>We can reset your password if you let us know your email address</Text>
          </View>
          <View style={styles.innerContainer2}>
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

            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'white' }]}
              onPress={this.onContinue()}
            >
              <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.backButton, {marginTop:25}]}
              onPress={() => this.props.navigation.goBack()}
            >
              <Image
                source={images.backArrow}
                style={styles.backArrow}
                resizeMode='contain'
              />
              <Text style={styles.whiteText}>It's OK, I remembered</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>

        <Modal
          isVisible={showModal}
        >
          <View style={styles.modal}>
            <Text style={styles.modalText}>{success ? 'Email Sent' : 'Invalid Email'}</Text>
            <View style={styles.modalContent}>
              <Image
                source={success ? images.success : images.fail}
                style={styles.modalImage}
                resizeMode='contain'
              />
              {
                !success ?
                <Text style={styles.modalText2}>Please try again</Text>
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
    paddingTop: 90,
    alignItems: 'center',
  },
  innerContainer1: {
    width: 290,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  innerContainer2: {
    width: 240,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo: {
    width: '100%',
    height: 100
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Myriad-BoldItalic',
    fontSize: 20,
    textAlign: 'center'
  },
  customInput: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: 'white',
    marginTop: 25,
    marginBottom: 30,
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
    // textAlign: 'center'
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
  backButton: {
    flexDirection: 'row',
  },
  backArrow: {
    width: 20,
    height: 20,
    marginRight: 5,
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
  },
  modalText2: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 20,
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ForgotPassword
  }, dispatch);
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(ForgotScreen);
