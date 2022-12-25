import { Text, View, BackHandler } from 'react-native'
import React, {useEffect} from 'react'


const TesFunction = ({navigation}) => {
    // kode useEffect di bawah
    useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View>
      <Text>TesFunction</Text>
    </View>
  )
}

export default TesFunction

