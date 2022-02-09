import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { createTask } from '../api';
import { colorAccent, colorPrimary, colorSucces } from '../colors';

const TaskFormScreen = ({navigation}) => {
  const [task, setTask] = useState({
    title:'',
    description:''
  })

  const setTaskText = (name, value) => setTask({...task, [name]:value})

  const submitTask = async () => {
    const response = await createTask(task)
    console.log(response)
    navigation.navigate("HomeScreen")
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
    backgroundColor:colorAccent,
    borderRadius:10,
    fontSize:14,
    color:colorPrimary
  },
  text:{
    fontSize:14,
    color:colorPrimary
  },
  buttonSave:{
    backgroundColor:colorSucces,
    padding:15,
    margin:20,
    borderRadius:10,
    width:'90%',
    alignItems:'center'
  },
  textButtonSave:{
    color:colorAccent,
    fontSize:15
  }
})

export default TaskFormScreen;
