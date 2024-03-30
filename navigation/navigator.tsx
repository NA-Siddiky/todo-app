import {createNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

const Stack = createNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings 123x!</Text>
    </View>
  );
}

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      {/* <Stack.Screen
        name="login"
        component={SignInScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen name="Start" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
