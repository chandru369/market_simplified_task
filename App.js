import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';

//Screen Imports
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import LoadingScreen from './src/screens/loadingScreen';

const SwitchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    LoadingScreen,
    LoginScreen,
    HomeScreen,
  },
  {
    initialRouteName: 'LoadingScreen',
    headerMode: 'none'
  })
})

var App = Platform.select({
  default: config => createAppContainer(config),
});

App = App(SwitchNavigator);

export default () => {
  return (
    <App  />
)
}