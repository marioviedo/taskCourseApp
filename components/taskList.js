import { FlatList, RefreshControl } from 'react-native';
import React, {useEffect, useState} from 'react';
import { getTasks, deleteTask } from '../api';
import TaskItem from './taskItem';
import { colorPrimary, colorSucces } from '../colors';

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [refreshing, setrefreshing] = useState(false);

    const loadTasks = async () =>{        
        const data = await getTasks()        
        setTasks(data)    
    }
    useEffect(()=>{ // cuando cargue la pantalla se ejecutara esto        
        loadTasks()        
    }, [])

  const handleDelete = async (id) =>{        
    await deleteTask(id)
    await loadTasks()
  }
  
  const renderItem = ({item})=>{    
    return <TaskItem task={item} handleDelete={handleDelete}/>
  }

  const refresh = React.useCallback(async () => {
    setrefreshing(true)
    console.log("refreshing")
    await loadTasks()
    setrefreshing(false)
  })

  return (
    <FlatList 
        style={{width:'100%'}}
        data={tasks} 
        keyExtractor={(item)=>{
            return item.id
        }}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={[colorSucces]}
            progressBackgroundColor={colorPrimary}
            onRefresh={refresh}
          />
        }
    />
  );
};

export default TaskList;
