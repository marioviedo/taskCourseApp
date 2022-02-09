import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const DeleteButton = ({id, handleDelete}) => {
    return (
        <TouchableOpacity onPress={()=>handleDelete(id)}>
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


