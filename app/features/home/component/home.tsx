import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';

function Home(): React.JSX.Element {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Buy milk', isActive: true },
    { id: '2', text: 'Walk the dog', isActive: false },
    { id: '3', text: 'Finish project', isActive: true },
  ]);

  const toggleTodo = (id:any) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isActive: !todo.isActive } : todo));
  };
 
   return (
    <>
       <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
          </View>
        )}
      />
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 20,
     backgroundColor: '#fff',
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
     fontSize: 18,
  },
  buttonContainer: {
     flexDirection: 'row',
  },
  button: {
     paddingHorizontal: 10,
     paddingVertical: 5,
     borderRadius: 5,
     marginRight: 10,
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
 });

export default Home;
