//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import images from '../../../../const/images';

// create a component
class BuyCreditButton extends Component {
  static propTypes = {
    icon: PropTypes.any.isRequired,
    text: PropTypes.string,
    onPress: PropTypes.func
  }

  static defaultProps = {
    text: '',
    onPress: () => {}
  }

  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0
    }
  }

  onLayout({nativeEvent}) {
    const { width } = nativeEvent.layout;
    const height = width / 235 * 51;
    this.setState({width, height});
  }

  render() {
    const { height } = this.state;
    const { icon, text, onPress } = this.props;

    return (
      <TouchableOpacity
        onLayout={this.onLayout.bind(this)}
        style={[styles.container, {height}]}
        onPress={onPress}
      >
        <ImageBackground
          source={images.buttonBG3}
          style={styles.backgroundImage}
          resizeMode='contain'
        >
          <Image
            source={icon}
            style={styles.buttonIcon}
            resizeMode='contain'
          />
          <Text style={styles.buttonText}>{text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 25
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginRight: 25,
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent',
  }
});

//make this component available to the app
export default BuyCreditButton;