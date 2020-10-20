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
  TextInput
} from 'react-native';
import { width, height } from 'react-native-dimension';

import images from '../../../const/images';

import {
  updateStackNavigation
} from '../../../global';

const Line = () => (
  <View style={styles.line}/>
)

const TNCText = props => (
  <View style={styles.tncItem}>
    <View style={styles.dot} />
    <Text style={styles.tncText}>{props.children}</Text>
  </View>
)

// create a component
class PromotionDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0
    };

    updateStackNavigation(props.navigation, 3);
  }

  onLayout({ nativeEvent }) {
    const { width } = nativeEvent.layout;
    this.setState({ width: width })
  }

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

          <Text style={styles.headerText}>Promotion</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.promotionTitle}>KEEP CALM & WOMEN SALE UP TO 50% OFF</Text>
          <Line />
          <View style={styles.infoView}>
            <View style={styles.iconView}>
              <Image
                style={styles.icon}
                source={images.locationIcon}
                resizeMode='contain'
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Location</Text>
              <Text style={styles.text}>37 LOCATIONS</Text>
            </View>
          </View>
          <Line />
          <View style={styles.infoView}>
            <View style={styles.iconView}>
              <Image
                style={styles.icon}
                source={images.timeIcon}
                resizeMode='contain'
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>Time Left</Text>
              <Text style={styles.text}>40 DAYS</Text>
            </View>
          </View>
          <Line />
          <View style={styles.tncView}>
            <View style={styles.tncHeader}>
              <View style={styles.iconView}>
                <Image
                  style={styles.icon}
                  source={images.tncIcon}
                  resizeMode='contain'
                />
              </View>
              <Text style={styles.text}>Terms and Conditions</Text>
            </View>
            <View style={styles.tncBody}>
              <TNCText>Valid from 1 Feb to 31 March 2018</TNCText>
              <TNCText>Applicable for both weekdays & weekend</TNCText>
              <TNCText>Promotion is not redeemable or exchangable for cash</TNCText>
              <TNCText>App voucher must be presented at point of redemption</TNCText>
            </View>
          </View>
          <Line />
          <View style={styles.buttonView}>
            <TouchableOpacity
            >
              <ImageBackground
                style={styles.buttonImage}
                source={images.buttonBG1}
                resizeMode='contain'
              >
                <Text style={styles.buttonText}>Download Deal</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
  },
  promotionTitle: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Myriad-Bold',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#242E36'
  },
  infoView: {
    flexDirection: 'row',
    paddingTop: 13,
    paddingBottom: 13,
  },
  iconView: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 24,
  },
  textView: {
    flex: 1,
    height: 40,
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
  },
  tncView: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
  },
  tncHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tncBody: {
    width: '100%',
    paddingLeft: 10,
    marginTop: 5,
  },
  tncItem: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginTop: 6,
    marginRight: 10,
    backgroundColor: '#5D5D5D'
  },
  tncText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    width: '100%',
  },
  buttonView: {
    height: 60,
    justifyContent: 'center',
  },
  buttonImage: {
    width: 140,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  }
});

//make this component available to the app
export default PromotionDetailScreen;
