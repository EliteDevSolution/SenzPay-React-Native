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
class MobileTopUpResultScreen extends Component {
  constructor(props) {
    super(props);
  }

  goBack = () => () => {
    const backAction = NavigationActions.back({
      key: this.props.navigation.state.params.key,
    });
    this.props.navigation.dispatch(backAction);
  }

  toMainScreen() {
    this.props.navigation.navigate('Home')
  }

  toReportScreen() {
    this.props.navigation.navigate('REPORT')
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
            <Text style={styles.text}>Reload processing...</Text>

            <View>
              <TouchableOpacity
                style={{ marginBottom: 15 }}
                onPress={this.toMainScreen.bind(this)}
              >
                <ImageBackground
                  source={images.buttonBG1}
                  style={styles.button}
                  resizeMode='stretch'
                >
                  <Text style={styles.buttonText}>Main Screen</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.toReportScreen.bind(this)}
              >
                <ImageBackground
                  source={images.buttonBG1}
                  style={styles.button}
                  resizeMode='stretch'
                >
                  <Text style={styles.buttonText}>Report Screen</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
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
    height: height(100) - 100,
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
    padding: 20,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'black',
    fontFamily: 'Myriad-Italic',
    fontSize: 35,
  },
  button: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
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
export default connect(mapStateToProps, mapDispatchToProps)(MobileTopUpResultScreen);
