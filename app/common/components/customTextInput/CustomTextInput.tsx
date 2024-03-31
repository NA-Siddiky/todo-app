import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, Image, TextInputProps, Text } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
    logo?: any;
    logoStyle?: object;
    containerStyle?: object;
    calender?: boolean;
    error?: string; // Add error prop
    value?: any;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    autoCapitalize,
    maxLength,
    logo,
    logoStyle,
    containerStyle,
    editable,
    onFocus,
    calender,
    error, // Destructure error prop
    ...restProps
}) => {
    const inputRef = useRef<TextInput>(null);
    const handleFocus = () => {
        if (editable && inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <View style={[styles.container, containerStyle, error ? styles.errorContainer : {}]}>
            {logo && <Image source={logo} style={[styles.logo, logoStyle]} />}
            <TextInput
                ref={inputRef}
                style={[calender ? [styles.input, styles.inputColor] : styles.input, error ? styles.errorInput : {}]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                maxLength={maxLength}
                editable={editable}
                onFocus={onFocus}
                {...restProps}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 8,
        marginTop: 8,
    },
    errorContainer: {
        borderColor: 'red', // Red border for error state
    },
    input: {
        flex: 1,
        height: 40,
    },
    inputColor: {
        color: 'black'
    },
    errorInput: {
        borderColor: 'red', // Red border for error state
    },
    logo: {
        marginRight: 10,
        width: 20,
        height: 20,
    },
    errorText: {
        color: 'red', // Red color for error message
        marginTop: 5, // Add some space above the error message
    },
});

export default CustomTextInput;