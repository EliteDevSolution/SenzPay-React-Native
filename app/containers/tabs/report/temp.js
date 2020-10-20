//import liraries
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

import images from '../../../const/images';

import { openDrawer } from '../../../global';

// create a component
class ReportHomePage extends Component {
  render() {
    return (
      <ImageBackground
        source={images.background2}
        style={styles.container}
        resizeMode='cover'
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => openDrawer()}
          >
            <Image
              source={images.menu}
              style={styles.menuIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>

          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>

        <View style={styles.content}>

        </View>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
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
  menuButton: {
    marginLeft: 15,
  },
  menuIcon: {
    width: 23,
    height: 23,
  },
  logo: {
    width: 100,
    height: 40,
  },
  content: {
    flex: 1,
    backgroundColor: '#E1E1E1'
  }
});

//make this component available to the app
export default ReportHomePage;
