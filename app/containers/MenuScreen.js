//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/user';

import {
  closeDrawer
} from '../global';

import images from '../const/images';

const Line = () => (
  <View style={styles.line}/>
)

// create a component
class MenuScreen extends Component {
  navigateToScreen = (route) => () => {
    closeDrawer();
    this.props.navigation.navigate(route);
  }

  closeMenu = () => () => {
    closeDrawer();
  }

  render() {
    const { user } = this.props;
    
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.closeMenu()}
        >
          <Image
            source={images.close}
            style={styles.closeIcon}
            resizeMode='stretch'
          />
        </TouchableOpacity>

        <View style={styles.profileView}>
          <Text style={styles.text}>Hi {user.first_name}!</Text>
        </View>

        <Line />
        <TouchableOpacity
          style={styles.menuButton}
          onPress={this.navigateToScreen('Profile')}
        >
          <Image
            source={images.menuProfile}
            style={styles.menuButtonIcon}
            resizeMode='contain'
          />
          <Text style={styles.menuButtonText}>My Profile</Text>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity
          style={styles.menuButton}
          onPress={this.navigateToScreen('FAQ')}
        >
          <Image
            source={images.menuFAQ}
            style={styles.menuButtonIcon}
            resizeMode='contain'
          />
          <Text style={styles.menuButtonText}>FAQ</Text>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity
          style={styles.menuButton}
          onPress={this.navigateToScreen('About')}
        >
          <Image
            source={images.menuAbout}
            style={styles.menuButtonIcon}
            resizeMode='contain'
          />
          <Text style={styles.menuButtonText}>About Senzpay</Text>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity
          style={styles.menuButton}
          onPress={this.navigateToScreen('Contact')}
        >
          <Image
            source={images.menuContact}
            style={styles.menuButtonIcon}
            resizeMode='contain'
          />
          <Text style={styles.menuButtonText}>Contact</Text>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => this.props.logout()}
        >
          <Image
            source={images.menuLogout}
            style={styles.menuButtonIcon}
            resizeMode='contain'
          />
          <Text style={styles.menuButtonText}>Logout</Text>
        </TouchableOpacity>
        <Line />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.select({ios: 20}),
    backgroundColor: '#232D36',
  },
  closeButton: {
    marginTop: 15,
    marginLeft: 15
  },
  closeIcon: {
    width: 20,
    height: 20
  },
  profileView: {
    width: '100%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Gilroy-ExtraBold',
  },
  menuButton: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButtonIcon: {
    width: 27,
    height: 27,
    marginLeft: 15,
    marginRight: 15
  },
  menuButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Myriad-Italic',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#777777'
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
    logout
  }, dispatch);
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
