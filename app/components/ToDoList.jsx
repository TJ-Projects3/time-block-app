import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, CheckBox } from 'react-native';

export default function ToDoList() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;

    setTasks([...tasks, { id: Date.now().toString(), task, time, completed: false }]);
    setTask('');
    setTime('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TO-DO</Text>
      <View style={styles.addTask}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          placeholderTextColor="#aaa"
          value={task}
          onChangeText={setTask}
        />
        <TextInput
          style={styles.input}
          placeholder="Time (e.g., 2hr, 30min)"
          placeholderTextColor="#aaa"
          value={time}
          onChangeText={setTime}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View style={styles.taskInfo}>
              <CheckBox
                value={item.completed}
                onValueChange={() => toggleTaskCompletion(item.id)}
              />
              <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                {item.task}
              </Text>
            </View>
            <Text style={styles.taskTime}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222', // Dark background
    padding: 10,
    borderRadius: 10, // Rounded corner on the top-right
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 20,
    letterSpacing: 2,
  },
  addTask: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#444',
    borderColor: '#666',
    borderWidth: 1,
    color: 'white',
    padding: 10,
    marginRight: 5,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#444',
    borderColor: '#666',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#00d9ff',
    fontWeight: '700',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    color: 'white',
    marginLeft: 10,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#777',
  },
  taskTime: {
    color: '#00d9ff',
    fontSize: 14,
  },
});