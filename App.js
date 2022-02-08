import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator()

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={({navigation})=>({
            title:'Task App',
            headerStyle:{backgroundColor:'#1F2937'},
            headerTitleStyle:{color:'#FFFFFF'},
            headerRight:()=>(
              <TouchableOpacity onPress={()=>{navigation.navigate('TaskFormScreen')}}>
                <Text style={{color:'#FFFFFF'}}>New</Text>
              </TouchableOpacity>)
          })}
        />
        <Stack.Screen 
          name="TaskFormScreen" 
          component={TaskFormScreen}
          options={{
            title:'Create Task',
            headerStyle:{backgroundColor:'#1F2937'},
            headerTitleStyle:{color:'#FFFFFF'},            
            headerTintColor:'#FFFFFF'
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App