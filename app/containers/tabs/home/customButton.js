//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

import images from '../../../const/images';

// create a component
class CustomButton extends Component {
  static propTypes = {
    icon: PropTypes.any.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string,
    onPress: PropTypes.func,
    isLast: PropTypes.bool
  }

  static defaultProps = {
    text2: '',
    onPress: () => {},
    isLast: false
  }

  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0,
    }
  }

  onLayout({nativeEvent}) {
    const { width, height } = nativeEvent.layout;
    const min = Math.min(width, height);
    this.setState({width: min, height: min})
  }

  render() {
    const { width, height } = this.state;

    return (
      <View
        onLayout={this.onLayout.bind(this)}
        style={[styles.container, {marginRight: this.props.isLast ? 0 : 5}]}
      >
        <TouchableOpacity
          style={{
            width: this.state.width,
            height: this.state.height,
          }}
          onPress={this.props.onPress}
        >
          <ImageBackground
            source={images.buttonBG2}
            style={{
              width: width,
              height: height,
              padding: width/20,
              paddingBottom: width/7,
              paddingRight: width/7,
            }}
            resizeMode='contain'
          >
            <View style={{flex: 4, alignItems: 'center'}}>
              <View style={{flex: 1}}/>
              <Image
                source={this.props.icon}
                style={styles.icon}
                resizeMode='contain'
              />
            </View>
            <View style={{flex: 3, alignItems: 'center', paddingTop: 5}}>
              <Text style={styles.text}>{this.props.text1}</Text>
              <Text style={styles.text}>{this.props.text2}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '50%',
    height: 30,
  },
  text: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Myriad-Italic',
    backgroundColor: 'transparent'
  }
});

//make this component available to the app
export default CustomButton;
