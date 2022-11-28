import React, { Component } from 'react'
import {View, StatusBar, StyleSheet, Alert, BackHandler } from 'react-native'
import Components from './components/Components';
import TesComponents from './components/TesComponents';
import Tes1 from './components/Tes1';
import TesForm from './components/TesForm';
import TesFlatList from './components/TesFlatList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  backAction = ()=>{
    Alert.alert('Keluar!', 'Apakah anda yakin ingin keluar?', [
      {
        text: 'Cancel',
        onPress: ()=> null,
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: ()=> BackHandler.exitApp() //ini method untuk keluar dari aplikasi 
      }
    ])
    return true;
  }
componentDidMount() {
  this.BackHandler = BackHandler.addEventListener('hardwareBackPress', this.backAction) //ini mengambil tombol kembali dengan event dan jika di klik maka function backaction akan di jalankan
}
componentWillUnmount() {
  this.BackHandler.remove; // ini untuk mereset / me load ulang aplikasi
}

  render() {
    return (
      <View style={styles.scrool}>
        <StatusBar barStyle='dark-content' backgroundColor='#64b5f6'/>
        <TesComponents/>
        <TesForm/>
        <Components />
        <Tes1/>
        <TesFlatList style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrool:{
    flex: 1
  }
})
/* 
  - Untuk syntax xml lihat di file Components/components.js
*/
export default App;