import React, { Component } from 'react';
import {View, Text, BackHandler, Alert, StyleSheet, FlatList} from 'react-native';
import TesFunction from './components/TesFunction';

let Name = 'Ridho'
let age = 19
const student = {
  name: 'Ridho',
  age : 18,
}

const data = [
  {
    id: 1,
    name:'Ridho',
    age:20
  },
  {
    id: 2,
    name:'fahreza',
    age: 30
  },
  {
    name: 'siswono',
    age: 34
  }
]
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
      <View>
        <Text style={styles.tes}>Ini Hello World</Text>
        <Text style={styles.tes}>Hello my Name  is {Name}  my age is {age} years old</Text>
        <Text style={styles.tes}>My Bio is Name: {student.name} Age : {student.age}</Text>
        <FlatList 
          data={data}
          renderItem={({item, index}) => <View style={styles.tes1}>
            <Text style={styles.tes2}>name: {item.name}</Text>
            <Text style={styles.tes2}>age: {item.age}</Text>
            </View>}
            keyExtractor={(item)=>item.id}
        />
        <TesFunction/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    tes:{
      color: 'red',
      fontSize: 12
    },
    tes1:{
      backgroundColor: 'blue',
      margin : 11,
      padding : 12,
      alignItems: 'center',
      borderRadius: 12,
      elevation: 10
    },
    tes2:{
      color: 'white'
    }
})
export default App;