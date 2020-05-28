import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuth} from '../contexts/AuthContext';

import TestComponent from '../components/TestComponent';

export default function HomeScreen({navigation}) {
  const [count, setCount] = useState(0);
  const {logout} = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation, setCount]);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text>Home Screen {count}</Text>
            <TestComponent onPress={increment} />
            <Button title="Logout" onPress={logout} color="blue" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Math.round(Dimensions.get('window').height - 75),
  },
});
