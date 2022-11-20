import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logo from '../../assets/images/lock.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import {useUser} from '../state/UserContext';
import Layout from './../components/Layout';

const SignInScreen = () => {
  const {user, signIn, setUser} = useUser();
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  return (
    <Layout>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Sign In</Text>
        {user.errors != null && (
          <View>
            {user.errors.map((error, index) => (
              <Text key={index} style={styles.errorText}>
                {error}
              </Text>
            ))}
          </View>
        )}
        <CustomInput
          value={credentials.email}
          setValue={value => setCredentials({...credentials, email: value})}
          placeholder="Email"
        />
        <CustomInput
          value={credentials.password}
          setValue={value => setCredentials({...credentials, password: value})}
          placeholder="Password"
          secureTextEntry
        />
        <CustomButton
          disabled={user.status === 'loading'}
          title="Sign In"
          onPress={() => signIn(credentials)}
        />
        <Text style={styles.text}>
          Don't have an account ?{' '}
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate('SignUp');
              if (user.errors) {
                setUser({...user, errors: null});
              }
            }}>
            {' '}
            Sign up
          </Text>
        </Text>
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
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginVertical: 20,
    color: 'white',
  },
  logo: {
    width: 32,
    height: 42,
  },
  text: {
    fontWeight: '400',
    color: 'white',
  },
  link: {
    color: '#3694EB',
  },
  extraLinks: {
    position: 'absolute',
    bottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 285,
    width: '50%',
    justifyContent: 'space-between',
  },
  errorText: {
    color: 'red',
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default SignInScreen;
