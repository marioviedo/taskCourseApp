import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { deleteTask } from '../api';

const DeleteButton = (props) => {

    const deleteTaskButton = async () =>{        
        const response = await deleteTask(props.id)
        console.log(response)
    }

    return (
        <TouchableOpacity onPress={deleteTaskButton}>
            <Text style={styles.textDeleteButton}>Delete</Text>
        </TouchableOpacity>    
    );
};

const styles = StyleSheet.create({
    textDeleteButton:{
        color:'red'
    }
});

export default DeleteButton;


