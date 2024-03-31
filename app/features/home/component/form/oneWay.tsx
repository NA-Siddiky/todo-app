import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CustomTextInput from '../../../../common/components/customTextInput/CustomTextInput';
import CustomCalendar from '../../../../common/components/customCalendar/customCalendar';
import RadioButton from '../../../../common/components/radioButton/radioButton';
import CustomToggleSwitch from '../../../../common/components/customToggleSwitch/CustomToggleSwitch';
import CustomButton from '../../../../common/components/customButton/customButton';
import CustomModal from '../../../../common/components/customModal/customModal';
import LoadingModal from '../../../../common/components/LoadingModal/LoadingModal';
import { useAppDispatch } from '../../../../redux/store';
import { flightData } from '../../../../redux/features/flight';
// import imagePath from '../../../../../assets/images/homeBus.png';


function OneWay(): React.JSX.Element {
    const navigation: any = useNavigation(); // initialize navigation
    const dispatch = useAppDispatch();

    const [selectedDate, setSelectedDate] = useState<any>({
        '2024-02-02': {
            selected: true,
            marked: true,
            selectedColor: 'blue',
        }
    });
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false); // State to control dropdown visibility
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [passengerCounts, setPassengerCounts] = useState({
        adults: 0,
        children: 0,
        infants: 0,
    });
    const [selectedClass, setSelectedClass] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleApply = () => {
        // Implement your logic for the "Apply" button
        setModalVisible(false);
    };


    const handleDayPress = (date: any) => {
        setSelectedDate(date.dateString);
    };

    useEffect(() => {
        if (inputValue) {
            fetchData(inputValue).then((response: any) => {
                setData(response);
            });
        } else {
            setData([]);
        }
    }, [inputValue]);

    const fetchData = async (query: any) => {
        // Simulate an API call with fake data
        const fakeData = [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
            'Item 5',
        ];
        return fakeData;
    };

    const handleToggle = (value: boolean) => {
        console.log('Switch toggled:', value);
    };

    const handlePress = () => {
        setIsLoading(true);
        const flights: any[] = [
            {
                from: 'New York',
                to: 'Los Angeles',
                ticketPrice: '$200',
                departureTime: '10:00 AM',
                companyName: 'Airline A',
            },
            {
                from: 'Chicago',
                to: 'San Francisco',
                ticketPrice: '$150',
                departureTime: '11:00 AM',
                companyName: 'Airline B',
            },
            // Add more flight objects as needed
        ];
        // Simulate a delay
        setTimeout(() => {
            setIsLoading(false);
            dispatch(flightData(flights))
            navigation.navigate('flightList');
        }, 3000);
        console.log('Button pressed');
    };

    const handleSelect = (item: any, index: any) => {
        setSelectedItem(item);
        setInputValue(item); // Update the input value with the selected item
        setSelectedIndex(index); // Update the selected item index
        setDropdownVisible(false); // Close the dropdown
    };
    const handleClose = () => {
        // Handle close action
        setModalVisible(false);
    };

    const incrementPassengerCount = (type: keyof typeof passengerCounts) => {
        setPassengerCounts(prevCounts => ({
            ...prevCounts,
            [type]: prevCounts[type] + 1,
        }));
    };

    const decrementPassengerCount = (type: keyof typeof passengerCounts) => {
        setPassengerCounts(prevCounts => ({
            ...prevCounts,
            [type]: Math.max(prevCounts[type] - 1, 0), // Ensure the count doesn't go below 0
        }));
    };

    const handleClassSelection = (classType: string) => {
        setSelectedClass(classType);
    };

    return (
        <>
            <LoadingModal loaderImage={require('../../../../../assets/icons/loading.png')} visible={isLoading} />

            <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={5}
            >
                <View>
                    <Text>From</Text>
                    <CustomTextInput
                        placeholder="Dhaka (DAC)"
                        onChangeText={setInputValue}
                        value={selectedItem}
                        // onChangeText={(e) => {
                        //     console.log(e)
                        // }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        logo={require('../../../../../assets/icons/take-off.png')}
                        containerStyle={{ borderColor: '#a9a9a9' }} // Custom border color
                        onFocus={() => setDropdownVisible(true)} // Show dropdown on focus
                    />
                    {dropdownVisible && data.length > 0 && (
                        <View style={styles.dropdown}>
                            {data.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleSelect(item, index)}
                                    style={[
                                        styles.dropdownItem,
                                        selectedIndex === index ? styles.selectedItem : {},
                                    ]}
                                >
                                    <Text style={styles.dropdownItemText}>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.leftText}>To</Text>
                    <View style={styles.middleContainer}>
                        <Image
                            source={require('../../../../../assets/icons/switch.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                </View>
                <CustomTextInput
                    placeholder="Dhaka (DAC)"
                    // value={email}
                    onChangeText={(e) => {
                        console.log(e)
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    logo={require('../../../../../assets/icons/landing.png')}
                    containerStyle={{ borderColor: '#a9a9a9' }} // Custom border color
                />
                <Text>Journey Date</Text>

                <CustomCalendar markedDates={{ [selectedDate]: { selected: true } }} onDayPress={handleDayPress} />
                <View>

                    <TouchableWithoutFeedback onPress={() => {
                        setModalVisible(true)
                    }}>
                        <View>

                            <Text>Passenger and Class</Text>
                            <CustomTextInput
                                placeholder="1 Passenger , Economy Class"
                                value={(passengerCounts.adults > 0 ? `${passengerCounts.adults} Adults ,` : '') +
                                    (passengerCounts.children > 0 ? ` ${passengerCounts.children} Children ,` : '') +
                                    (passengerCounts.infants > 0 ? ` ${passengerCounts.infants} Infants ,` : '') +
                                    (selectedClass ? ` ${selectedClass} Class` : '')}
                                onChangeText={(e) => {
                                    console.log(e)
                                }}
                                editable={false}
                                onFocus={() => {
                                    setModalVisible(true)
                                }} // Show modal on focus
                                // keyboardType="email-address"
                                autoCapitalize="none"
                                containerStyle={{ borderColor: '#a9a9a9' }} // Custom border color
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    <CustomModal
                        visible={modalVisible}
                        onClose={handleClose}
                        onApply={handleApply}
                        title=""
                        content={<>
                            <Text>Passengers</Text>
                            <View style={styles.passengerCountSection}>
                                <View style={styles.passengerCountSectionSingle}>
                                    <Text style={styles.passengerCountText}>Adults</Text>
                                    <View style={styles.passengerCountButtons}>
                                        <TouchableOpacity style={styles.roundButton} onPress={() => decrementPassengerCount('adults')}>
                                            <Text style={styles.roundButtonText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.passengerCountText}>{passengerCounts.adults}</Text>
                                        <TouchableOpacity style={styles.roundButton} onPress={() => incrementPassengerCount('adults')}>
                                            <Text style={styles.roundButtonText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.line} />
                                <View style={styles.passengerCountSectionSingle}>
                                    <Text style={styles.passengerCountText}>Children</Text>
                                    <View style={styles.passengerCountButtons}>
                                        <TouchableOpacity style={styles.roundButton} onPress={() => decrementPassengerCount('children')}>
                                            <Text style={styles.roundButtonText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.passengerCountText}>{passengerCounts.children}</Text>
                                        <TouchableOpacity style={styles.roundButton} onPress={() => incrementPassengerCount('children')}>
                                            <Text style={styles.roundButtonText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.line} />

                                <View style={styles.passengerCountSectionSingle}>
                                    <Text style={styles.passengerCountText}>Infants</Text>
                                    <View style={styles.passengerCountButtons}>
                                        <TouchableOpacity style={styles.roundButton} onPress={() => decrementPassengerCount('infants')}>
                                            <Text style={styles.roundButtonText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.passengerCountText}>{passengerCounts.infants}</Text>
                                        <TouchableOpacity style={styles.roundButton} onPress={() => incrementPassengerCount('infants')}>
                                            <Text style={styles.roundButtonText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.line} />

                            </View>
                            {/* ... existing passenger count sections ... */}
                            <Text>Class</Text>
                            <View style={styles.classSelectionSection}>
                                <View >
                                    <RadioButton
                                        label="Economy"
                                        // value="economy"
                                        selected={selectedClass === 'economy' ? true : false}
                                        onSelect={() => handleClassSelection('economy')}
                                    />

                                    <RadioButton
                                        label="Business"
                                        // value="business"
                                        selected={selectedClass === 'business' ? true : false}
                                        onSelect={() => handleClassSelection('business')}
                                    />

                                </View>
                                <View>
                                    <RadioButton
                                        label="Premium Economy"
                                        // value="premiumEconomy"
                                        selected={selectedClass === 'premiumEconomy' ? true : false}
                                        onSelect={() => handleClassSelection('premiumEconomy')}
                                    />
                                    <RadioButton
                                        label="First Class"
                                        // value="firstClass"
                                        selected={selectedClass === 'firstClass' ? true : false}
                                        onSelect={() => handleClassSelection('firstClass')}
                                    />
                                </View>

                            </View>
                            {/* ... other content */}
                        </>}
                        cancelButtonLabel="Cancel"
                        applyButtonLabel="Apply"
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.leftItem}>Direct Flight First</Text>
                    <CustomToggleSwitch initialValue={true} onToggle={handleToggle} />

                </View>
                <View style={styles.button}>
                    <CustomButton text="Search Flights" fullWidth={true} onPress={handlePress} />
                </View>
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        marginTop: 10,
        // borderWidth:  1,
        // borderColor: '#ccc',
        // borderRadius:  5,
    },
    nameContainer: {
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'space-between', // Distribute items evenly
    },
    leftText: {
        textAlign: 'left', // Align text to the left
    },
    middleContainer: {
        flex: 1, // Take up the remaining space, centering the image
        alignItems: 'center', // Center the image horizontally
    },
    imageStyle: {
        width: 20, // Set the width of the image
        height: 20, // Set the height of the image
        // Add any other styles you need for the image
    },

    leftItem: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    button: {
        marginTop: 10,
    },
    dropdown: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dropdownItem: {
        padding: 10,
    },
    selectedItem: {
        backgroundColor: '#FFCCDE', // Light red background color
    },
    dropdownItemText: {
        color: 'black',
    },
    passengerCountSection: {
        // width: '100%',
        // Styles for the passenger count section
    },
    passengerCountSectionSingle: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Align items to the left and right
        alignItems: 'center', // Align items vertically
        // marginBottom: 10, // Add some space between rows
    },
    passengerCountButtons: {
        flexDirection: 'row',
        // justifyContent: 'space-between', // Align buttons to the right
        width: '40%', // Take up half the width of the parent
    },
    passengerCountText: {
        fontWeight: 'bold', // Make the text bold
        marginHorizontal: 15, // Add some space on the left and right of the text
    },
    roundButton: {
        width: 30, // Width of the button
        height: 30, // Height of the button
        borderRadius: 15, // Half the width and height for a round shape
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center', // Center the text horizontally
        backgroundColor: '#D91B5E', // Background color of the button
        borderWidth: 1, // Border width
        borderColor: '#D91B5E', // Border color
    },
    roundButtonText: {
        color: 'white', // Text color
        fontWeight: 'bold', // Make the text bold
    },
    line: {
        borderBottomWidth: 1, // Width of the line
        borderBottomColor: '#A9A9A9', // Ash color of the line
        marginVertical: 10, // Add some space above and below the line
    },
    classSelectionSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

});



export default OneWay;
