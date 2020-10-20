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
  ScrollView
} from 'react-native';
import { width, height } from 'react-native-dimension';

import images from '../../../../const/images';

// create a component
class JomPayOnlineScreen extends Component {
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

          <Text style={styles.headerText}>JomPAY with Online Banking</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.titleText}>JomPAY your SenzPay Credit... Now</Text>
          
          <ScrollView style={{flex: 1, width: '100%'}}>
            <View style={styles.stepView}>
              <Image
                source={images.jompayRoundRect}
                resizeMode='stretch'
                style={styles.stepBg}
              />
              <Text style={styles.stepIndexText}>STEP-1</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepContentNormalText}>Login to your Favorite Bank</Text>
                <Text style={styles.stepContentNormalText}>(Any Bank in Malaysia)</Text>
                <Text style={styles.stepContentNormalText}>Click Pay Bill  'JomPAY'</Text>
              </View>
            </View>

            <View style={styles.stepView}>
              <Image
                source={images.jompayRoundRect}
                resizeMode='stretch'
                style={styles.stepBg}
              />
              <Text style={styles.stepIndexText}>STEP-2</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepContentBoldText}>Key in :</Text>
                <Text style={styles.stepContentBoldText}>Biller Code: 66886</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.stepContentBoldText}>Ref1 : </Text>
                  <Text style={styles.stepContentNormalText}>Your Login mobile Phone</Text>
                </View>
                <Text style={styles.stepContentNormalText}>**comes with Success</Text>
                <Text style={styles.stepContentNormalText}>SMS Notification</Text>
              </View>
            </View>

            <View style={styles.stepView}>
              <Image
                source={images.jompayRoundRect}
                resizeMode='stretch'
                style={styles.stepBg}
              />
              <Text style={styles.stepIndexText}>STEP-3</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepContentBoldText}>Congrats.....</Text>
                <Text style={styles.stepContentNormalText}>Your SenzPay Credit is ready to use.</Text>
              </View>
            </View>
          </ScrollView>
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
  titleText: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 18,
    marginVertical: 15
  },
  stepView: {
    width: '100%',
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 15,
    marginBottom: 15,
    backgroundColor: 'transparent'
  },
  stepBg: {
    width: width(100),
    height: width(22.5),
    position: 'absolute',
    top: 0,
    left: 0
  },
  stepIndexText: {
    color: 'white',
    fontFamily: 'Myriad-BoldItalic',
    fontSize: 22,
    marginBottom: 5,
  },
  stepContent: {
    width: '100%',
    paddingLeft: 35,
    paddingRight: 10,
    paddingVertical: 18,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  stepContentNormalText: {
    color: 'black',
    fontSize: 19,
    lineHeight: 21,
    fontFamily: 'Myriad-Italic',
  },
  stepContentBoldText: {
    color: 'black',
    fontSize: 19,
    lineHeight: 21,
    fontFamily: 'Myriad-BoldItalic',
  }
});

//make this component available to the app
export default JomPayOnlineScreen;
