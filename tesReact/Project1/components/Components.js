import React, { Component } from 'react'
import {View, Text}  from 'react-native'
import Header from './Header';

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{}}>
            <Header/>
                <Text 
                style={{fontSize: 30, 
                        textAlign: 'center',
                        color : 'red',
                        textDecorationLine: 'line-through'
                }}>Ini Adalah Komponen
                <Text style={{backgroundColor:'black', color :'white', textDecorationLine:'none'}}>Tes 1</Text>
                </Text>
                <View style={{ backgroundColor:'red', justifyContent:'center' , alignItems:'center', margin: 30, flexDirection:'column-reverse', width: 300, height: 300}}>
                    <Text style={{color:'white', fontWeight: 'bold'}}>Hello My Name Is Fahreza</Text>
                    <Text style={{color:'white', fontWeight: 'bold'}}>Hello My Name Is Ridho2</Text>
                    <Text style={{color:'white', fontWeight: 'bold'}}>Hello My Name Is Ridho3</Text>
                    <Text style={{color:'white', fontWeight: 'bold'}}>Hello My Name Is Ridho4</Text>
                </View>
            </View>
        );
    }
}
/*
    Hal Yang Perlu di perhatikan
    - syntax text bisa memasukkan syntax text yang lain 
    - jika parent dalam text di beri style dan child juga di beri style yang sama maka keduanya tidak saling mempengaruhi 
    - jika parent saja yang di beri style maka mempengaruhi child 
    - untuk sementara ini style yang di beri nilai hanya angka, tidak di beri meteran ukur seperti px, vh dll
    - flex adalah propertie untuk memberikan lebar dalam display , jika ingin memberi display dengan flex maka semua elemen view yang berkaitan harus di beri propertie flex
    - properties flex direction mengatur bagaimana sebuah konten di atur tata letak nya
*/


/*
syntax xml Components
Text : Menampilkan Text juga bisa Menulis Text
style : Untuk Memberi Style / dekorasi
view : sama system nya seperti div yaitu menyimpan property seperti text, form dll
*/
export default Components;