import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home';
import Detail from './src/Screens/Detail';
import About from './src/Screens/About';
import SplashScreen from './src/Screens/SplashScreen';
import TesFunction from './components/TesFunction';

const Stack = createNativeStackNavigator(); //stack untuk membuat Navigasi

const Tab = createBottomTabNavigator(); //untuk membuat Tombol tab navigasi

//route sebagai tempat navigasi bar
const Route = ()=>{
    return(
      // back behavior agar jika kita tekan back maka akan selalu ke home
      <Tab.Navigator screenOptions={{headerShown: false}} backBehaviour = "initialRoute">
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Detail" component={Detail}/>
        <Tab.Screen name="About" component={About}/>
      </Tab.Navigator>
    )
}


const App = ()=>{
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name='TesFunction' component={TesFunction} />
          <Stack.Screen name='Route' component={Route} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;