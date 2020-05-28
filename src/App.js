import 'react-native-gesture-handler';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useAuth} from './contexts/AuthContext';
import Theme from './theme';

import HomeNavigation from './navigations/HomeNavigation';
import SettingsNavigation from './navigations/SettingsNavigation';

import LoginScreen from './screens/LoginScreen';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const {state} = useAuth();

  const isLogin = state.isLogin;

  return (
    <NavigationContainer>
      {isLogin ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: Theme.primaryColor,
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeNavigation} />
          <Tab.Screen name="Settings" component={SettingsNavigation} />
        </Tab.Navigator>
      ) : (
        // TODO: AUTH PAGES

        <RootStack.Navigator>
          <RootStack.Screen name="Login" component={LoginScreen} />
        </RootStack.Navigator>
      )}
    </NavigationContainer>
  );
}
