import { Easing, Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './containers/SplashScreen.js';
import AuthNav from './containers/auth';
import Main from './containers/main';

const fade = (props) => {
  const { position, scene } = props

  const index = scene.index

  const translateX = 0
  const translateY = 0

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  })

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  }
}

const Root = StackNavigator({
  Splash: {
    screen: SplashScreen
  },
  Auth: {
    screen: AuthNav
  },
  Main: {
    screen: Main
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 500,
      useNativeDriver: true,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: (props) => {
      return fade(props)
    }
  })
})

export default Root;