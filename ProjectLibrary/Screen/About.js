import {  StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import Spinner from 'react-native-spinkit'



const About = () => {

  const [load, setLoad] = useState(false)

  useEffect(()=>{
      setLoad(true)
      setTimeout(()=>{
        setLoad(false)
      }, 500)
  },[])
  return (
    <View>
      {
        load ?
         <View style={styles.loading}>
          <Spinner style={styles.spin} isVisible={true} size={50}  type={'WanderingCubes'} color={'black'}/>
        </View>
        :
        <Text>About this</Text>
      }
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  loading:{
    marginHorizontal: 150,
    marginVertical: 350
  }
})