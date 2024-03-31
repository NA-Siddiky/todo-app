// SignIn.tsx
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function SignIn(): React.JSX.Element {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);

  const handleSignUpOrLogin = () => {
    if (isSignUp) {
      // Handle sign-up logic here
      console.log('Signing up with email:', email, 'and password:', password);
      // Navigate to the home screen after successful sign-up
      navigation.navigate('Main', {screen: 'Home'});
    } else {
      // Handle login logic here
      console.log('Logging in with email:', email, 'and password:', password);
      // Navigate to the home screen after successful login
      navigation.navigate('Main', {screen: 'Home'});
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        returnKeyType="next"
        onSubmitEditing={() => passwordInputRef.current.focus()}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={handleSignUpOrLogin}
        ref={passwordInputRef}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUpOrLogin}>
        <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Log In'}</Text>
      </TouchableOpacity>
      <Text onPress={() => setIsSignUp(!isSignUp)} style={styles.toggleText}>
        {isSignUp ? 'Already have an account? Log in' : 'New user? Sign up'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#FF6347', // Redish border color
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FF6347', // Redish background color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
  },
  toggleText: {
    color: '#FF6347', // Redish color for the toggle text
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignIn;
