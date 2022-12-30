import { StatusBar, Text, View , StyleSheet, TextInput, FlatList } from 'react-native'
import React from 'react';

const Data = [
  {
    id : 1,
    name : 'La Ode Ridho Fahreza',
    Jurusan : 'Teknik Informatika'
  },
  {
    id : 2,
    name : 'La Ode Ridho Fahreza',
    Jurusan : 'Teknik In'
  },
  {
    id : 3,
    name : 'La Ode Ridho Fahreza',
    Jurusan : 'Teknik In'
  },
  {
    id : 4,
    name : 'La Ode Ridho Fahreza',
    Jurusan : 'Teknik In'
  },
  {
    id : 5,
    name : 'La Ode Ridho Fahreza',
    Jurusan : 'Teknik In'
  }

]
const Home = () => {

  return (
    <View>
      <StatusBar backgroundColor="#4fc3f7" barStyle="dark-content"/>
      
      <View style={styles.Home}>
         
          <Text style = {styles.textHome}>Home</Text>
      </View>
      <View style = {styles.InputView}>
        <TextInput style ={styles.Input} />
      </View>

      <View style={styles.parentFlatListView}>
      <FlatList 
        data={Data}
        renderItem={({item, index})=>(
          <View style = {styles.FlatListView}>
            <Text style = {styles.FlatListText}>{item.name}</Text>
            <Text style = {styles.FlatListText}>{item.Jurusan}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Home:{
    fontSize : 20,
    color : 'white',
    backgroundColor : '#4fc3f7',
    padding : 12,
    height : 100
  },
  textHome:{
    textAlign : 'center',
    fontSize : 25,
    color: 'white'
  },
  InputView: {
    position : 'absolute',
    backgroundColor : 'white',
    top: 80,
    marginHorizontal : 50,
    borderRadius : 13,
    elevation : 14,
    width : 300
  },
  FlatListView:{
    backgroundColor : '#4fc3f7',
    margin : 15,
    alignItems : 'center',
    borderRadius : 12,
    padding : 13,
    elevation : 3
  },
  FlatListText:{
    color: 'white',
    fontSize : 16
  },
  parentFlatListView:{
    marginTop: 50
  }
})
export default Home

