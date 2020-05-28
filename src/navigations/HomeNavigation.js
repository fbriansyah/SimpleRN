import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen, {ScreenName as HomeScreenName} from '../screens/HomeScreen';

const StackNav = createStackNavigator();

function HomeNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name={HomeScreenName} component={HomeScreen} />
    </StackNav.Navigator>
  );
}

export default HomeNavigation;
