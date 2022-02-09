import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colorAccent, colorPrimary } from "./colors";
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
            headerStyle:{backgroundColor:colorPrimary},
            headerTitleStyle:{color:colorAccent},
            headerRight:()=>(
              <TouchableOpacity onPress={()=>{navigation.navigate('TaskFormScreen')}}>
                <Text style={{color:colorAccent}}>New</Text>
              </TouchableOpacity>)
          })}
        />
        <Stack.Screen 
          name="TaskFormScreen" 
          component={TaskFormScreen}
          options={{
            title:'Create new task',
            headerStyle:{backgroundColor:colorPrimary},
            headerTitleStyle:{color:colorAccent},            
            headerTintColor:colorAccent
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App