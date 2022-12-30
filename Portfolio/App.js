import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screen/Home';
import About from './src/Screen/About';
import Portfolio from './src/Screen/Portfolio'; 
import SplashScreen from './src/Screen/SplashScreen';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Route = ()=>{
  return(
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='About' component={About}/>
      <Tab.Screen name='Portofolio' component={Portfolio} />
    </Tab.Navigator>
  )
}


const App = ()=>{
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Route' component={Route} />
          <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App



// //rnefs adalah shorcut components