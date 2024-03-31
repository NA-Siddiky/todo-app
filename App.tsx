/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import UserContext from './app/contexts/UserContext';
import StackNavigator from './app/routes/stackNavigator';

function App(): React.JSX.Element {
  const [email, setEmail] = useState<string>('');

  return (
    <UserContext.Provider value={{email, setEmail}}>
      <NavigationContainer>
        <StackNavigator />
        {/* <Navigation /> */}
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
