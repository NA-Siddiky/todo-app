import React, { ReactNode, useEffect, useRef } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';

interface CustomModalProps {
    visible: boolean;
    onClose?: () => void;
    onApply?: () => void;
    title?: string;
    content: ReactNode;
    cancelButtonLabel?: string;
    applyButtonLabel?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
    visible,
    onClose,
    onApply,
    title,
    content,
    cancelButtonLabel = 'Cancel',
    applyButtonLabel = 'Apply',
}) => {
    const modalAnimation = useRef(new Animated.Value(0)).current; // Initialize the animation value

    useEffect(() => {
        if (visible) {
            // Start the animation when the modal becomes visible
            Animated.timing(modalAnimation, {
                toValue: 1,
                duration: 300, // Duration of the animation in milliseconds
                useNativeDriver: true, // Use native driver for better performance
            }).start();
        } else {
            // Reset the animation value when the modal is not visible
            modalAnimation.setValue(0);
        }
    }, [visible]);

    const animatedStyle = {
        opacity: modalAnimation, // Bind the animation value to the opacity
        transform: [
            {
                translateY: modalAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0], // Start from 100px below the screen and move to the top
                }),
            },
        ],
    };
    return (
        <Modal
            // animationType="slide"
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <Animated.View style={[styles.modalBackground, animatedStyle]}>
                <Animated.View style={[styles.modalContainer, animatedStyle]}>
                    {title && <Text style={styles.modalTitle}>{title}</Text>}
                    <ScrollView style={styles.modalContent}>
                        <View>{content}</View>
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.applyButton} onPress={onApply}>
                            <Text style={styles.buttonText}>{applyButtonLabel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                            <Text style={styles.buttonTextCancel}>{cancelButtonLabel}</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </Animated.View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '85%',
        // alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalContent: {
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    applyButton: {
        backgroundColor: '#D91B5E',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: 'white',
        borderWidth: 1, // Width of the border
        borderColor: '#D0D5DD',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
        color: 'black',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonTextCancel: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default CustomModal;
