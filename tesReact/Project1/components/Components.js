import React, { Component } from 'react'
import {View, Text, Image, Switch, StyleSheet, ScrollView}  from 'react-native'
import TesButton from './TesButton';
import PerMission from './PerMission';

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: true
         };
    }
    render() {
        return (
            <ScrollView style={{marginTop: 12}}>
                <Text 
                style={styles.text1}>Ini Adalah Komponen
                <Text style={styles.text3}>Tes 1</Text>
                </Text>
                <View style={styles.view1}>
                    <Text style={styles.text2}>Hello My Name Is Fahreza</Text>
                    <Text style={styles.text2}>Hello My Name Is Ridho2</Text>
                    <Text style={styles.text2}>Hello My Name Is Ridho3</Text>
                    <Text style={styles.text2}>Hello My Name Is Ridho4</Text>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                {/* Offline */}
                    <Image source={require('../src/img/PROJECT1.png')} style={styles.img} resizeMode= 'stretch' />
                {/* Online */}
                    <Image source={{uri: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/313182280_198615029250787_5679394773073172304_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=3lAmgTx5ECcAX-_k7Oz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAveEzVrI6xKpIxHGb7Et7LuNPESSYbjuvM2Cto9vTwsw&oe=63867CB2&_nc_sid=8fd12b'}} style={styles.img} />
                </View>
                <View style={styles.switch}>
                 <Switch style={{}} value={this.state.value} onValueChange={()=> this.setState({value: ! this.state.value})} />
                 <TesButton/>
                <PerMission/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    view1:{
        backgroundColor:'red', 
        justifyContent:'center', 
        alignItems:'center', 
        margin: 30, 
        flexDirection:'column-reverse', 
        width: 300, 
        height: 300
    },
    img:{
        width: 200,
        height: 200,
        margin: 12
    },
    text1:{
        fontSize: 30, 
        textAlign: 'center',
        color : 'red',
        textDecorationLine: 'line-through'
    },
    text2:{
        color:'white', 
        fontWeight: 'bold'
    },
    text3:{
        backgroundColor:'black', 
        color :'white', 
        textDecorationLine:'none'
    },
    switch:{
        justifyContent: 'center',
        alignItems:'center'
    },
})


/*
    Hal Yang Perlu di perhatikan
    - snippet imrc dan cccs
    - syntax text bisa memasukkan syntax text yang lain 
    - jika parent dalam text di beri style dan child juga di beri style yang sama maka keduanya tidak saling mempengaruhi 
    - jika parent saja yang di beri style maka mempengaruhi child 
    - untuk sementara ini style yang di beri nilai hanya angka, tidak di beri meteran ukur seperti px, vh dll
    - flex adalah propertie untuk memberikan lebar dalam display , jika ingin memberi display dengan flex maka semua elemen view yang berkaitan harus di beri propertie flex
    - properties flex direction mengatur bagaimana sebuah konten di atur tata letak nya
    - status bar lebih baik masuk ke dalam root components
    - design color link = https://www.materialpalette.com/colors
    - dalam syntaxt image terdapat property resizeMode: repeat (akan menambah gambar jika ada ruang lebih), cover(hanya memaksimalkan ukuran walau ada yang terpotong), contain(akan memberikan ukuran asli dalam gambar), strecth(mengikuti apa yang ada dalam parent view nya)
    - jika kita ingin mnenggunakan stylesheet maka pemanggilan style nya adalah style = {styleVariable.styleName}
    - dalam alert ada 3 parameter yaitu alert(Untuk Judul Alert, Untuk Isi Alert, Untuk Tombol Alert)
    - tombol alert di buat dalam array of object
    - Onpress adalah sebuah fungsi jika tombol di tekan maka instruksi kode apa yang harus di jalankan
    - toasandroid berfungsi untuk membuat membuat notifikasi di bawah 
    - dalam toast android memiliki toastandroid(tostandroid.show(apa yang ingin di show, toasandroid.SHORT))
*/


/*
syntax xml Components
Text : Menampilkan Text juga bisa Menulis Text
style : Untuk Memberi Style / dekorasi
view : sama system nya seperti div yaitu menyimpan property seperti text, form dll
StatusBar: memberikan style di bagian paling atas hand phone biasanya seperti baterai, jam dll 
Image : Mengambil gambar dan menampilkannya di dalam Display
Switch : membuat tombol on off 
Stylesheet: untuk memberi style secara terpisah dengan memanggil class nya
Button : Untuk menampilkan Tommbol
Flatlist : Untuk memberikan list data
Alert: Untuk menampilkan alert
ActivityIndicator: untuk menampilkan loading
*/
export default Components;