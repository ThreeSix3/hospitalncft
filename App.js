import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./pages/Login"
import Loading from "./pages/Loading"

const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Loading" component={Loading}/>
        </Stack.Navigator>

      </NavigationContainer>
  );
}