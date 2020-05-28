import React, {useLayoutEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ScreenName = 'Profile';

export default function ProfileScreen({navigation}) {
  useLayoutEffect(() => {
    // Navigation Settings
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text>Profile Screen</Text>
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
