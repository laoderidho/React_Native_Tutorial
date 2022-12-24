import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native'

import React, {useEffect} from 'react'

const Home = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Keluar!", "Apa Anda Yakin ingin Keluar?", [
        {
          text: "Tidak",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Iya", onPress: () => BackHandler.exitApp() }
      ]);
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
      <Text>Home</Text>
      <Text>Ini adalah Menu Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})