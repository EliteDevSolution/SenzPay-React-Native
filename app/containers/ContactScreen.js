//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import images from '../const/images';

// create a component
class ContactScreen extends Component {
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

          <Text style={styles.headerText}>Contact</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.titleText}>Get In Touch</Text>
          <View style={[styles.detail, {marginBottom: 15}]}>
            <Image
              source={images.contactPhone}
              style={styles.contactIcon}
              resizeMode='contain'
            />
            <Text style={styles.detailText}>+60138713713</Text>
          </View>
          <View style={[styles.detail, {marginBottom: 15}]}>
            <Image
              source={images.contactEmail}
              style={styles.contactIcon}
              resizeMode='contain'
            />
            <Text style={styles.detailText}>hi@senzpay.asia</Text>
          </View>
          <Text style={[styles.detailText, {marginLeft: 32, marginBottom: 35}]}>support@senzpay.asia</Text>

          <Text style={styles.titleText}>Visit Us</Text>
          <Text style={[styles.detail, styles.detailText]}>http://www.senzpay.asia</Text>
        </View>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({ios: 20}),
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
    paddingTop: 25,
    paddingLeft: 30,
  },
  titleText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-BoldItalic',
    marginBottom: 15
  },
  contactIcon: {
    width: 17,
    height: '100%',
    marginRight: 10,
  },
  detail: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  detailText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  }
});

//make this component available to the app
export default ContactScreen;
