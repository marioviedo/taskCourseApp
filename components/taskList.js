import { FlatList, RefreshControl } from 'react-native';
import React, {useEffect, useState} from 'react';
import { getTasks } from '../api';
import TaskItem from './taskItem';

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

  const renderItem = ({item})=>{    
    return <TaskItem task={item}/>
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
            colors={["#2F8811"]}
            progressBackgroundColor="#1F2937"
            onRefresh={refresh}
          />
        }
    />
  );
};

export default TaskList;
