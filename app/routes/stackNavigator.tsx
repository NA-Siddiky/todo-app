import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import SignInScreen from '../features/auth/component/signIn/signInScreen';
import HomeScreen from '../features/home/homeScreen';
import SettingsScreen from '../features/settings/settingScreen';
import TasksScreen from '../features/tasks/tasksScreen';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function NotificationsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notificatn</Text>
    </View>
  );
}

// Define your stack navigator
function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      {/* Add other login-related screens here */}
    </Stack.Navigator>
  );
}

// Define your drawer navigator
function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Tasks" component={TasksScreen} />

      {/* Add other screens to the drawer navigator as needed */}
    </Drawer.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
