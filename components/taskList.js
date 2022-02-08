import { FlatList } from 'react-native';
import React from 'react';
import TaskItem from './taskItem';

const TaskList = (props) => {
  const renderItem = ({item})=>{    
    return <TaskItem task={item}/>
  }
  return (
    <FlatList 
        style={{width:'100%'}}
        data={props.tasks} 
        keyExtractor={(item)=>{
            return item.id
        }}
        renderItem={renderItem}
    />
  );
};

export default TaskList;
