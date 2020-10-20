//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import SplashScreen from './containers/SplashScreen.js';
import AuthNav from './containers/auth';
import Main from './containers/main';

// create a component
class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSplash: true,
    }

    setTimeout(() => {
      this.setState({ showSplash: false });
    }, 2500);
  }

  render() {
    if (this.state.showSplash) {
      return <SplashScreen />
    }

    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return <AuthNav />
    }

    return <Main />
  }
}

const mapStateToProps = function (state) {
  const { user } = state;
  return {
    isAuthenticated: user.isAuthenticated
  }
};

//make this component available to the app
export default connect(mapStateToProps)(Root);
