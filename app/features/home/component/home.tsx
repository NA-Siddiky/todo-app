import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

function Home(): React.JSX.Element {
  const [todos, setTodos] = useState([]);

  console.log('todo>>', todos);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          'http://192.168.1.100:5010/tasks/abc@gmail.com',
        );
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
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
});

export default Home;
