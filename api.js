const apiEndPoint = 'http://10.0.2.2:3000/tasks'

export const getTasks = async () =>{
    const response = await fetch(apiEndPoint)        
    return await response.json()
}

export const createTask = async (newTask) =>{
    const response = await fetch(apiEndPoint, {
        method:'POST',
        headers:{
            Accept:'application/json', 
            "Content-Type":'application/json'
        },
        body:JSON.stringify(newTask)        
    })

    return await response.json()
}

export const deleteTask = async (id) =>{
    const response = await fetch(`${apiEndPoint}/${id}`, {
        method:'DELETE'
    })
    return await response.json()
}

export const updateTask = async (task, id)=>{
    const response = await fetch(`${apiEndPoint}/${id}`, {
        method:'PUT',
        headers:{
            Accept:'application/json',
            "Content-Type":'application/json'
        },
        body:JSON.stringify(task)
    })

    return await response.json()
}