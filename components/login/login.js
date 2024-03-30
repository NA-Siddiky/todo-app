import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignUpLoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yours Daily Plan</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Sign Up Pressed')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Log In Pressed')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SignUpLoginPage;
