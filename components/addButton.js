import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const AddButton = (props) => {
  return (          
    <TouchableOpacity onPress={()=>{props.navigation.navigate('TaskFormScreen')}}>
        <Text>New</Text>
    </TouchableOpacity> 
  );
};


export default AddButton;
