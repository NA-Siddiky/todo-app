import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import CustomButton from '../../../common/components/customButton/customButton';
import CustomModal from '../../../common/components/customModal/customModal';
import axios from 'axios';

function Tasks(): React.JSX.Element {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await axios.get(
            'http://localhost:5010/tasks/abc@gmail.com',
          );
          setTodos(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
  
      fetchTasks();
    }, []);

   const [modalVisible, setModalVisible] = useState(false);
   const [newTaskTitle, setNewTaskTitle] = useState('');
   const [newTaskDescription, setNewTaskDescription] = useState('');

   
   const toggleTodo = (id: any) => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, isActive: !todo.isActive } : todo));
   };

   const deleteTodo = (id: any) => {
      setTodos(todos.filter(todo => todo.id !== id));
   };

   const handleApply = () => {
      // Implement your logic for the "Apply" button
      const newTask = {
         id: Math.random().toString(), // Generate a random ID for the new task
         text: newTaskTitle,
         description: newTaskDescription,
         isActive: false, // New tasks are initially marked as incomplete
      };

      setTodos([...todos, newTask]); // Add the new task to the todos array
      setNewTaskTitle(''); // Clear the title input
      setNewTaskDescription(''); // Clear the description input
      setModalVisible(false);
   };

   const handleClose = () => {
      // Handle close action
      setModalVisible(false);
   };
   // const handleCreateTask = () => {
   //    navigation.navigate('CreateTask');
   // };
   return (
      <>
         <TouchableOpacity style={styles.createTaskButton}>
            <CustomButton onPress={() => {
               setModalVisible(true);
            }} text="Create Task" fullWidth={true} />
         </TouchableOpacity>
         <View style={styles.container}>
            <FlatList
               data={todos}
               keyExtractor={item => item.id}
               renderItem={({ item }:any) => (
                  <View style={styles.todoItem}>
                     <Text style={styles.todoText}>{item?.text}</Text>
                     <Text style={styles.todoDescription}>{item?.description}</Text>
                     <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => toggleTodo(item.id)} style={styles.button}>
                           <Text style={[styles.activeButton, item.isActive ? styles.active : styles.inactive]}>
                              {item.isActive ? 'Completed' : 'Incomplete'}
                           </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                           <CustomButton onPress={() => deleteTodo(item.id)} text="Delete" />
                        </TouchableOpacity>
                     </View>
                  </View>
               )}
            />
         </View>
         <CustomModal
            visible={modalVisible}
            onClose={handleClose}
            onApply={handleApply}
            title=""
            content={<>
               <Text>Passengers</Text>
               <View style={styles.formContainer}>
                  <TextInput
                     style={styles.input}
                     placeholder="Task Title"
                     value={newTaskTitle}
                     onChangeText={setNewTaskTitle}
                  />
                  <TextInput
                     style={styles.input}
                     placeholder="Task Description"
                     value={newTaskDescription}
                     onChangeText={setNewTaskDescription}
                  />
                 
               </View>
            </>}
            cancelButtonLabel="Cancel"
            applyButtonLabel="Apply"
         />
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
   },
   createTaskButton: {
      // backgroundColor: '#007BFF', // Blue background
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginBottom: 20, // Add some space below the button
      alignSelf: 'center', // Center the button
   },
   todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
   },
   todoText: {
      fontSize: 14,
      flex: 1, // Allow the description to take up available space
      width: 7000, 
   },
   todoDescription: {
      fontSize: 14,
      flex: 1, // Allow the description to take up available space
      width: 7000, 
      marginLeft: 10, // Add some space between the title and description
   },
   buttonContainer: {
      flexDirection: 'row',
   },
   button: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      // marginRight: 10,
      
   },
   activeButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
   },
   active: {
      backgroundColor: 'green',
      color: 'white',
   },
   inactive: {
      backgroundColor: 'red',
      color: 'white',
   },
   deleteButton: {
      backgroundColor: '#f00',
      color: 'white',
   },
   formContainer: {
      padding: 20,
      marginBottom: 20,
   },
   input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
   },
   addTaskButton: {
      backgroundColor: '#007BFF', // Blue background
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      alignSelf: 'center', // Center the button
   },
   addTaskText: {
      color: 'white',
      fontSize: 18,
   },
});

export default Tasks;
