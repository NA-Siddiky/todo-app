import { useNavigation, CommonActions } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function SignIn(): React.JSX.Element {
    const navigation: any = useNavigation(); // initialize navigation

    const handleSignIn = () => {
        // navigation.navigate('home');
        navigation.navigate('Main', { screen: 'Home' });
    };


    return (
        <>
            <View style={styles.container}>
                <View style={styles.card}>

                    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                        <Text style={styles.buttonText}>Login With Google</Text>
                    </TouchableOpacity>

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
});



export default SignIn;
