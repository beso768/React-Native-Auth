import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';
import React from 'react';
import {UserProvider, useUser} from '../state/UserContext';
import HomeScreen from './../screens/HomeScreen';
import SignInScreen from './../screens/SignInScreen';
import SignUpScreen from './../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const Index = () => {
  const {user} = useUser();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user.data != null ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
