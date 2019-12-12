import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';


const HomeNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,

}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);