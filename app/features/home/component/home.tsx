import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

function Home(): React.JSX.Element {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          'http://43.201.65.252/tasks/abc@gmail.com',
        );
        console.log('response', response);
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
          renderItem={({item}: any) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.title}</Text>
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
