import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingScreen from '../screens/SettingScreen';

const StackNav = createStackNavigator();

function SettingsNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Home" component={SettingScreen} />
    </StackNav.Navigator>
  );
}

export default SettingsNavigation;
