import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation/index';
import {UserProvider} from './src/state/UserContext';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </SafeAreaView>
  );
};

export default App;
