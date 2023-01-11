import { StatusBar, Text, View , StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React,{useState} from 'react';




const Data = [
  {
    id : 1,
    name : 'La Ode Ridho Fahreza',
    Jurusan : 'Teknik Informatika'
  },
  {
    id : 2,
    name : 'john doe',
    Jurusan : 'Teknik In'
  },
  {
    id : 3,
    name : 'fahreza steel',
    Jurusan : 'Teknik In'
  },
  {
    id : 4,
    name : 'misaku',
    Jurusan : 'Teknik In'
  },
  {
    id : 5,
    name : 'La Ode  Fahreza',
    Jurusan : 'Teknik In'
  },
  {
    id : 6,
    name : 'La Ode',
    Jurusan : 'Teknik In'
  },
  {
    id : 7,
    name : 'La Ode  alfiansyah',
    Jurusan : 'Teknik In'
  },
  {
    id : 8,
    name : 'La Ode giska jeremia',
    Jurusan : 'Teknik In'
  },
  {
    id : 9,
    name : 'firman makatita',
    Jurusan : 'Teknik In'
  },
  {
    id : 10,
    name : 'La Ode  Fahreza',
    Jurusan : 'Teknik In'
  },
  {
    id : 11,
    name : 'irajan tahlin liolatun',
    Jurusan : 'Teknik In'
  }
]


const Home = ({navigation}) => {
 
  
  // set di belakang menyimpan nilai dan nama state untuk menampilkan nilai
  const [search, setSearch] = useState(''); //setSearh menampilkan nilai yang akan di masukkan di search
  const [result, setResult] = useState(Data); //result dakan menampilkan nilai di useState data dalam bentuk setResult


  pencarian = text=>{
      setSearch(text) //setSeacrh akan mengambil text dalam parameter untuk nilai sementara yang di masukkan
      //jika tidak ada Nilai yang di masukkan maka ambil data setResult
      if(!text){
        setResult(Data)
      }
      //jika sebuah search ada datanya maka ambil data yang di masukkan ke dalam input
      else{
        const cari = Data.filter(item=> item.name.toLowerCase().includes(text.toLowerCase()))
        setResult(cari)
      }
  }

  return (
    <View>
      <StatusBar backgroundColor="#4fc3f7" barStyle="dark-content"/>
      
      <View style={styles.Home}>
          <Text style = {styles.textHome}>Home</Text>
      </View>

      <View style = {styles.InputView}>
        <TextInput placeholder='masukkan Nama yang anda cari' 
        style ={styles.Input} 
        value={search} 
        onChangeText = {pencarian}
        />
      </View>

      <View style={styles.parentFlatListView}>
      <FlatList 
        data={result}
        renderItem={({item})=>(
          //onpress di bawah ini untuk mengirim data ke dalam Detail 
          <TouchableOpacity onPress={()=> navigation.navigate('Detail', {
            id: item.id,
            name: item.name,
            Jurusan : item.Jurusan
          })}>
            <View style = {styles.FlatListView}>
            <Text style = {styles.FlatListText}>{item.name}</Text>
            <Text style = {styles.FlatListText}>{item.Jurusan}</Text>
          </View>
          </TouchableOpacity>
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
    height : 50,
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

