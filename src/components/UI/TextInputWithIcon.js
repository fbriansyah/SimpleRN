import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Theme from '../../theme';

function TextInputWithIcon({
  placeholder,
  icon,
  onChangeText,
  secureTextEntry,
  defaultValue,
  autoCapitalize,
  trailingIcon,
  onTrailingIconPressed,
}) {
  let TrailingIconComp = null;

  if (trailingIcon && trailingIcon !== '') {
    TrailingIconComp = (
      <Icon
        style={styles.iconButton}
        name={trailingIcon}
        size={20}
        color="#000"
        onPress={onTrailingIconPressed}
      />
    );
  }

  return (
    <View style={styles.formControll}>
      <Icon style={styles.icon} name={icon} size={20} color="#000" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        autoCapitalize={autoCapitalize ? autoCapitalize : 'sentences'}
        underlineColorAndroid="transparent"
      />
      {TrailingIconComp}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 8,
    marginBottom: 8,
    height: 40,
    borderBottomColor: Theme.primaryColor,
    borderBottomWidth: 1,
    width: '100%',
  },
  formControll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: Theme.primaryColor,
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  icon: {
    paddingRight: 8,
  },
  iconButton: {
    backgroundColor: '#fff',
    padding: 8,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default TextInputWithIcon;
