import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { colorAccent, colorPrimary } from '../colors';
import ItemButton from './itemButton';
import DeleteButton from './deleteButton';

const TaskItem = ({task, handleDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <ItemButton task={task}/>

      <DeleteButton id={task.id} handleDelete={handleDelete}/>
    </View>
  );
};

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:colorAccent,        
        padding:20,
        marginVertical:8,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

export default TaskItem;
