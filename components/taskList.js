import { FlatList } from 'react-native';
import React, {useEffect, useState} from 'react';
import { getTasks } from '../api';
import TaskItem from './taskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([])

    const loadTasks = async () =>{        
        const data = await getTasks()        
        setTasks(data)    
    }
    useEffect(()=>{ // cuando cargue la pantalla se ejecutara esto        
        loadTasks()        
    }, [])

  const renderItem = ({item})=>{    
    return <TaskItem task={item}/>
  }
  return (
    <FlatList 
        style={{width:'100%'}}
        data={tasks} 
        keyExtractor={(item)=>{
            return item.id
        }}
        renderItem={renderItem}
    />
  );
};

export default TaskList;
