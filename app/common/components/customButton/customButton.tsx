// ReusableButton.tsx
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ReusableButtonProps {
  text: string;
  fullWidth?: boolean;
  onPress: () => void;
  title?: any;
}

const CustomButton: React.FC<ReusableButtonProps> = ({
  text,
  fullWidth = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, fullWidth && styles.fullWidthButton]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D91B5E',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthButton: {
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;
