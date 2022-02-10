import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { createTask, updateTask } from '../api';
import { colorAccent, colorPrimary, colorSucces, colorWarning } from '../colors';

const TaskFormScreen = ({navigation, route}) => {
  const [task, setTask] = useState({
    title:'',
    description:''
  })

  const [isUpdating, setisUpdating] = useState(false);

  const setTaskText = (name, value) => setTask({...task, [name]:value})
  const submitTask = async () => {
    if(isUpdating)
    {
      const response = await updateTask(task, route.params.id)
      console.log(response)
      
    }else{
      const response = await createTask(task)
      console.log(response)
    }
    navigation.navigate("HomeScreen")
  }

  useEffect(() => {
    if(route.params && route.params.id)
    {
      setisUpdating(true)
      navigation.setOptions({
        headerTitle:'Update a task'
      })
      setTask({title:route.params.title, description:route.params.description})
    }    
  }, []);
  

  return (
    <Layout>
      <Text style={styles.text}>Title: </Text>
      <TextInput
        style={styles.input}
        placeholder='Write a title'
        onChangeText={(text) => setTaskText('title', text)}
        value={task.title}
      />

      <Text style={styles.text}>Description: </Text>
      <TextInput
        style={styles.input}
        placeholder='Write a description'   
        onChangeText={(text) => setTaskText('description', text)}
        value={task.description} 
      />

      {
        isUpdating ? (
          <TouchableOpacity style={styles.buttonUpdate} onPress={submitTask}>        
            <Text style={styles.textButtonUpdate}>Update task</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonSave} onPress={submitTask}>        
            <Text style={styles.textButtonSave}>Save task</Text>
          </TouchableOpacity>
        )
      }
      
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
  },
  buttonUpdate:{
    backgroundColor:colorWarning,
    padding:15,
    margin:20,
    borderRadius:10,
    width:'90%',
    alignItems:'center'
  },
  textButtonUpdate:{
    color:colorAccent,
    fontSize:15
  }
})

export default TaskFormScreen;
