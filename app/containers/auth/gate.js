//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import images from '../../const/images';

// create a component
class GateScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.outerContainer} scrollEnabled={false}>
        <ImageBackground
          source={images.background1}
          style={styles.background}
          resizeMode='cover'
        >
          <View style={styles.content}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode='contain'
            />
            <Text style={styles.whiteText}>START SENZPAY TODAY!</Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'transparent' }]}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.buttonText1}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'white' }]}
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              <Text style={styles.buttonText2}>SIGN UP</Text>
            </TouchableOpacity>
            <View />
          </View>
        </ImageBackground>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 240,
    height: 350,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  logo: {
    width: '100%',
    height: 100
  },
  whiteText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Light',
  },
  buttonText1: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  buttonText2: {
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
});

//make this component available to the app
export default GateScreen;
