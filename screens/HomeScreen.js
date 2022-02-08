import React, {useEffect, useState} from 'react';
import { getTasks } from '../api';
import TaskList from '../components/taskList';
import Layout from '../components/layout';

const HomeScreen = () => {

    const [tasks, setTasks] = useState([])

    const loadTasks = async () =>{        
        const data = await getTasks()        
        setTasks(data)    
    }
    useEffect(()=>{ // cuando cargue la pantalla se ejecutara esto        
        loadTasks()        
    }, [])

    return (
        <Layout>
            <TaskList tasks={tasks}/>
        </Layout>
    );
};

export default HomeScreen;
