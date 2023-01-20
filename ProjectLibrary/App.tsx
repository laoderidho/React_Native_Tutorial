// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import SplashScreen from './Screen/SplashScreen';
import About from './Screen/About';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Route (){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen  name='Home' component={Home}/>
          <Tab.Screen  name='About' component={About}/>
        </Tab.Navigator>
    )
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}} >
        <Stack.Screen name='Route' component={Route}/>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;