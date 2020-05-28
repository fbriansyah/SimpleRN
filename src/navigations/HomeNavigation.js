import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

const StackNav = createStackNavigator();

function HomeNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Home" component={HomeScreen} />
    </StackNav.Navigator>
  );
}

export default HomeNavigation;
