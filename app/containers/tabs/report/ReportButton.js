//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ImageBackground, Image, Text, StyleSheet } from 'react-native';

import images from '../../../const/images';

// create a component
class ReportButton extends Component {
  static propTypes = {
    icon: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    onPress: () => {},
  }

  render() {
    const { icon, text, onPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.reportButton}
        onPress={onPress}
      >
        <ImageBackground
          source={images.buttonBG3}
          style={styles.reportbuttonBG1}
          resizeMode='stretch'
        >
          <Image
            source={icon}
            style={styles.reportButtonIcon}
            resizeMode='contain'
          />
          <Text style={styles.reportButtonText}>{text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  reportButton: {
    width: '100%',
  },
  reportbuttonBG1: {
    width: '100%',
    height: 70,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportButtonIcon: {
    width: 27,
    height: '100%'
  },
  reportButtonText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Myriad-Italic',
    marginLeft: 25,
    backgroundColor: 'transparent'
  }
});

//make this component available to the app
export default ReportButton;
