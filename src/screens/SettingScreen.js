import React, {useLayoutEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SettingScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text>Setting Screen</Text>
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
