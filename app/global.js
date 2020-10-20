import { Animated } from 'react-native';

let drawerNavigation = null;
let stackNavs = new Array(4).fill(null);

export const setDrawerNavigation = navigation => {
  drawerNavigation = navigation;
}

export const updateStackNavigation = (navigation, index) => {
  stackNavs[index] = navigation
}

export const resetStackNavigation = index => {
  if (stackNavs[index] === null) {
    return;
  }
  stackNavs[index].goBack();
}

export const openDrawer = () => {
  drawerNavigation.navigate('DrawerOpen');
}

export const closeDrawer = () => {
  drawerNavigation.navigate('DrawerClose');
}

export const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 350,
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [{ translateX }] }
    },
  }
}