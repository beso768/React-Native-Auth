import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, title, disabled}) => {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3694EB',
    borderRadius: 5,
    width: '100%',
    marginVertical: 20,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    color: 'white',
  },
});

export default CustomButton;
