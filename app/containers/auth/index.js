import { Easing, Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';

import GateScreen from './gate';
import LoginScreen from './login';
import SignUpScreen from './signup';
import ForgotScreen from './forgot';

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

export default AuthNav = StackNavigator({
  Gate: {
    screen: GateScreen
  },
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  Forgot: {
    screen: ForgotScreen
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