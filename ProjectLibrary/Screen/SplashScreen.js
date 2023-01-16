import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { StackActions } from '@react-navigation/native';



const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.dispatch(StackActions.replace('Route'))
        }, 1500)
    },[])
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})