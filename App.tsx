/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SignUpLoginPage from './components/login/login';
import useAuth from './hooks/useAuth';
// import Navigator from './navigation/navigator';

function App(): React.JSX.Element {
  const {user} = useAuth();
  if (user) {
    console.log('User Logged in');
  } else {
    return <SignUpLoginPage />;
  }
}

export default App;
