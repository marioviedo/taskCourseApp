const apiEndPoint = 'http://10.0.2.2:3000/tasks'

export const getTasks = async () =>{
    const response = await fetch(apiEndPoint)        
    return await response.json()
}