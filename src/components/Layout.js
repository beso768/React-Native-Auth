import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Layout = ({children}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    minHeight: '100%',
  },
});

export default Layout;
