import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignInScreen from '../features/auth/component/signIn/signInScreen';
import HomeScreen from '../features/home/homeScreen';
import SettingsScreen from '../features/settings/settingScreen';
import TasksScreen from '../features/tasks/tasksScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="Tasks" component={TasksScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
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
