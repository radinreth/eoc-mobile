import React from 'react';
import {} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import SopDetailScreen from './screens/SopDetailScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SopDetail: SopDetailScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(AppNavigator);

export default App;
