import {View, Image, StyleSheet, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/lock.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../state/UserContext';

const SignUpScreen = () => {
  const {user, signUp, setUser} = useUser();
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    username: '',
  });

  return (
    <Layout>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Create Account</Text>
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
          value={credentials.username}
          setValue={value => setCredentials({...credentials, username: value})}
          placeholder="Username"
        />
        <CustomInput
          value={credentials.password}
          setValue={value => setCredentials({...credentials, password: value})}
          placeholder="Password"
          secureTextEntry
        />
        <CustomButton
          disabled={user.status === 'loading'}
          title="Continiue"
          onPress={() => signUp(credentials)}
        />
        <Text style={styles.text}>
          Already have an account ?{' '}
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate('SignIn');
              if (user.errors) {
                setUser({...user, errors: null});
              }
            }}>
            {' '}
            Login
          </Text>
        </Text>
      </View>
      <View style={styles.extraLinks}>
        <Text style={styles.text}>Terms of Use</Text>
        <Text style={styles.text}>Privacy Policy</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
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
    fontSize: 16,
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
export default SignUpScreen;
