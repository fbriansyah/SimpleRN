import * as React from 'react';
import {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import Theme from '../theme';
import Colors from '../theme/colors';
import {useAuth} from '../contexts/AuthContext';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login, state} = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const loginHandler = () => {
    login(username, password);
  };

  const errorText = () => <Text style={styles.errorText}>{state.error}</Text>;

  return (
    <React.Fragment>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.pageContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Silahkan Login</Text>
            {state.error !== '' ? errorText() : null}
            <TextInput
              style={styles.inputContainer}
              placeholder="Masukkan Username"
              onChangeText={text => setUsername(text)}
              autoCapitalize="none"
              defaultValue={username}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Masukkan Password"
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              defaultValue={password}
            />
            <Button
              title="Login"
              onPress={loginHandler}
              style={styles.button}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#ffffff',
    height: Math.round(Dimensions.get('window').height),
  },
  inputContainer: {
    marginTop: 8,
    marginBottom: 8,
    height: 40,
    borderBottomColor: Theme.primaryColor,
    borderBottomWidth: 1,
    width: '100%',
  },
  formContainer: {
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    fontSize: Theme.textTheme.size.title,
  },
  errorText: {
    color: Colors.Gray.shade500,
  },
  button: {
    borderRadius: 5,
  },
});
