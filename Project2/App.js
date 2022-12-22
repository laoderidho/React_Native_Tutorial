import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Detail from './src/Screens/Detail';
import About from './src/Screens/About';

const Stack = createNativeStackNavigator();

const App = ()=>{
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Detail' component={Detail} />
          <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;