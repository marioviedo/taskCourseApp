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