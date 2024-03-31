import React from 'react';
import { View , StyleSheet } from 'react-native';

const CustomLayout = ({children}:any) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default CustomLayout;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    header: {
      height: 60,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    footer: {
      height: 40,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerText: {
      color: '#fff',
    },
  });