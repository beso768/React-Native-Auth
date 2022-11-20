import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useUser} from '../state/UserContext';
import Layout from '../components/Layout';
import axios from 'axios';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {
  const {user, signOut} = useUser();

  return (
    <Layout>
      <View style={styles.root}>
        <Text style={styles.text}>Hello {user.data.username}</Text>
        <CustomButton
          disabled={user.status === 'loading'}
          title="Sign Out"
          onPress={signOut}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    margin: 'auto',
    maxWidth: 285,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontWeight: '400',
    color: 'white',
    fontSize: 27,
    fontWeight: '400',
    marginVertical: 10,
  },
});

export default HomeScreen;
