//import liraries
import React, { Component } from 'react';
import { ImageBackground, Image, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  GetProducts,
  GetDomesticProducts,
  GetInternationalProducts,
  GetUtilityProducts,
  GetPostpaidProducts
} from '../actions/product';

import images from '../const/images';

// create a component
class SplashScreen extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      props.navigation.navigate('Auth')
    }, 2500);
  }

  componentDidMount() {
    const { GetProducts, GetDomesticProducts, GetInternationalProducts, GetUtilityProducts, GetPostpaidProducts } = this.props;
    GetProducts();
    GetDomesticProducts();
    GetInternationalProducts();
    GetUtilityProducts();
    GetPostpaidProducts();
  }

  render() {
    return (
      <ImageBackground
        source={images.background1}
        style={styles.background}
        resizeMode='cover'
      >
        <Image
          source={images.logo}
          style={styles.logo}
          resizeMode='contain'
        />
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 100
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    GetProducts,
    GetDomesticProducts,
    GetInternationalProducts,
    GetUtilityProducts,
    GetPostpaidProducts
  }, dispatch);
};

//make this component available to the app
export default connect(null, mapDispatchToProps)(SplashScreen);
