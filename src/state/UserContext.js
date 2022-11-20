import axios from 'axios';
import * as React from 'react';

const UserContext = React.createContext();

function useUser() {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  const [user, setUser] = context;

  async function signIn(credentials) {
    try {
      setUser({...user, status: 'loading'});

      const {data} = await axios.post(
        'https://fathomless-cove-59941.herokuapp.com/auth/signin',
        credentials,
      );

      setUser({
        status: 'done',
        data,
        errors: null,
      });
      navigation.navigate('Home');
    } catch (error) {
      setUser({
        status: 'error',
        data: null,
        errors: error.response.data.message,
      });
    }
  }

  async function signOut() {
    try {
      await axios.post(
        'https://fathomless-cove-59941.herokuapp.com/auth/signout',
      );
      setUser({
        status: 'idle',
        data: null,
        errors: null,
      });
    } catch (error) {
      setUser({
        status: 'error',
        data: null,
        errors: error.response.data.message,
      });
    }
  }

  async function signUp(credentials) {
    try {
      setUser({...user, status: 'loading'});
      const {data} = await axios.post(
        'https://fathomless-cove-59941.herokuapp.com/auth/signUp',
        credentials,
      );
      setUser({
        status: 'done',
        data,
        errors: null,
      });
      navigation.navigate('Home');
    } catch (error) {
      setUser({
        status: 'error',
        data: null,
        errors: error.response.data.message,
      });
    }
  }

  return {
    user,
    setUser,
    signIn,
    signUp,
    signOut,
  };
}

function UserProvider(props) {
  const [user, setUser] = React.useState({
    status: 'idle',
    data: null,
    errors: null,
  });

  React.useEffect(() => {
    axios
      .get('https://fathomless-cove-59941.herokuapp.com/auth/whoami')
      .then(result =>
        setUser({
          status: 'done',
          data: result.data,
          errors: null,
        }),
      )
      .catch(err => console.log('err', err.response.data));
  }, []);

  const value = React.useMemo(() => [user, setUser], [user]);
  return <UserContext.Provider value={value} {...props} />;
}

export {UserProvider, useUser};
