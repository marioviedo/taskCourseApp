import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { colorAccent, colorPrimary } from '../colors';

const TaskItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Text style={styles.itemTitle}>{props.task.title}</Text>
        <Text style={styles.itemDescription}>{props.task.description}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

// '#4B5563' -> gris claro
// '#FFFFFF' -> blanco
// '#1F2937' -> gris obscuro
const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:colorAccent,        
        padding:20,
        marginVertical:8,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    itemTitle:{
        color:colorPrimary
    },
    itemDescription:{
        color:colorPrimary
    }
})

export default TaskItem;
