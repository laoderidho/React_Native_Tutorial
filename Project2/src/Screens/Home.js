import { Text, View } from 'react-native'
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Text onPress={()=>navigation.navigate('TesFunction')}>Klik ini</Text>
    </View>
  )
}

export default Home

