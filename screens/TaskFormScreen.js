import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { createTask } from '../api';

const TaskFormScreen = () => {
  const [task, setTask] = useState({
    title:'',
    description:''
  })

  const setTaskText = (name, value) => setTask({...task, [name]:value})

  const submitTask = async () => {
    const response = await createTask(task)
    console.log(response)
  }

  return (
    <Layout>
      <Text style={styles.text}>Title: </Text>
      <TextInput
        style={styles.input}
        placeholder='Write a title'
        onChangeText={(text) => setTaskText('title', text)}
      />

      <Text style={styles.text}>Description: </Text>
      <TextInput
        style={styles.input}
        placeholder='Write a description'   
        onChangeText={(text) => setTaskText('description', text)} 
      />

      <TouchableOpacity style={styles.buttonSave} onPress={submitTask}>
        <Text style={styles.textButtonSave}>Save task</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input:{
    width:'90%',
    padding:10,
    margin:10,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    fontSize:14,
    color:'#1F2937'
  },
  text:{
    fontSize:14,
    color:'#1F2937'
  },
  buttonSave:{
    backgroundColor:'#2F8811',
    padding:15,
    margin:20,
    borderRadius:10,
    width:'90%',
    alignItems:'center'
  },
  textButtonSave:{
    color:'#FFFFFF',
    fontSize:15
  }
})

export default TaskFormScreen;
