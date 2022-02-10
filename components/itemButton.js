import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colorAccent, colorPrimary } from '../colors';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ItemButton = (props) => {
  const nagivation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{nagivation.navigate("TaskFormScreen", props.task)}}>
        <Text style={styles.itemTitle}>{props.task.title}</Text>
        <Text style={styles.itemDescription}>{props.task.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    itemTitle:{
        color:colorPrimary
    },
    itemDescription:{
        color:colorPrimary
    }
});

export default ItemButton;


