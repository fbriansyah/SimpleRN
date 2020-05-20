import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useAuth} from './contexts/AuthContext';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const RootStack = createStackNavigator();

export default function App() {
  const {state} = useAuth();

  const isLogin = state.isLogin;

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isLogin ? (
          <>
            <RootStack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          // TODO: AUTH PAGES
          <>
            <RootStack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
