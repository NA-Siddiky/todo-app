import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Setting(): React.JSX.Element {
  const navigation: any = useNavigation();
  const handleLogout = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../../../../assets/images/homeBus.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hello, Siddiky!</Text>
          <Text style={styles.greetingOne}>What Are You Going?</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#D91B5E',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  greetingOne: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  logoutButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#f00', // Red background for the logout button
    alignSelf: 'center', // Center the button
    marginTop: 20, // Add some margin at the top
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Setting;
