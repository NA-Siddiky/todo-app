// SignIn.tsx
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import UserContext from '../../../../contexts/UserContext'; // Adjust the import path as necessary

function SignIn(): React.JSX.Element {
  const [isAlreadySignUp, setIsAlreadySignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const passwordInputRef = useRef(null);

  // Access email and setEmail from the UserContext
  const {setEmail: contextSetEmail} = useContext(UserContext);

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        // console.log(res.user.email);
        Alert.alert('user created' + email);
        setIsAlreadySignUp(true);
        // Set the email in the context
        contextSetEmail(res.user.email);
        navigation.navigate('Main', {
          screen: 'Home',
          params: {email: res.user.email},
        });
      })
      .catch(error => {
        console.log(error.code);
        Alert.alert(error.code);
      });
  };

  const handleLoginIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        // console.log(res.user.email);
        Alert.alert('Logged in successfully');
        // Set the email in the context
        contextSetEmail(res.user.email);
        navigation.navigate('Main', {
          screen: 'Home',
          params: {email: res.user.email},
        });
      })
      .catch(error => {
        console.log(error.code);
        Alert.alert(error.code);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            returnKeyType="next"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            returnKeyType="done"
            ref={passwordInputRef}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={isAlreadySignUp ? handleSignUp : handleLoginIn}>
            <Text style={styles.buttonText}>
              {isAlreadySignUp ? 'Sign Up' : 'Login'}
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => setIsAlreadySignUp(!isAlreadySignUp)}
            style={styles.toggleText}>
            {isAlreadySignUp
              ? 'Already have an account? Log in'
              : 'New user? Sign up'}
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
