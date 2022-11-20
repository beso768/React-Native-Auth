import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={setValue}
        value={value}
        style={styles.input}
        placeholderTextColor="white"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    width: '100%',
    height: 48,
    paddingHorizontal: 10,
    opacity: 0.7,
  },
});

export default CustomInput;
