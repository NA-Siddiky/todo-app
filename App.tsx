/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigator from './navigation/navigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
      {/* <Navigation /> */}
    </NavigationContainer>
  );
}

export default App;
