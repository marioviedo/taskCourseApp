import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const DeleteButton = (props) => {

    const deleteTask = () =>{
        console.log("delete task number : " + props.id)
    }

    return (
        <TouchableOpacity onPress={deleteTask}>
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


