import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ScreenName = 'Settings';

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
            <Button
              title="Go To Profile Setting"
              onPress={() => navigation.navigate('Profile')}
            />
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
