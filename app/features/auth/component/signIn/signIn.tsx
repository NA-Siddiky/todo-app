import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

function SignIn(): React.JSX.Element {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);

  const handleSignIn = () => {
    // navigation.navigate('home');
    navigation.navigate('Main', {screen: 'Home'});
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
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
            onSubmitEditing={handleSignIn}
            ref={passwordInputRef}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>
              {isSignUp ? 'Sign Up' : 'Login'}
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => setIsSignUp(!isSignUp)}
            style={styles.toggleText}>
            {isSignUp ? 'Already have an account? Log in' : 'New user? Sign up'}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'red', // red color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
  toggleText: {
    color: '#FF6347', // Redish color for the toggle text
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignIn;
