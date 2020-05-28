import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingScreen, {
  ScreenName as SettingScreenName,
} from '../screens/SettingScreen';
import ProfileScreen, {
  ScreenName as ProfileScreenName,
} from '../screens/ProfileScreen';

const StackNav = createStackNavigator();

function SettingsNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name={SettingScreenName} component={SettingScreen} />
      <StackNav.Screen name={ProfileScreenName} component={ProfileScreen} />
    </StackNav.Navigator>
  );
}

export default SettingsNavigation;
