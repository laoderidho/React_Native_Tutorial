import { Text, View, BackHandler } from 'react-native'
import React, {useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


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
      <Icon name='comments' size={30} color='#900'/>
      <Text>Ini Tes Function</Text>
    </View>
  )
}

export default TesFunction

