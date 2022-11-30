import React, { Component } from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native'

class PerMission extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    Permision = async ()=>{
        try{
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA) //ini mengambil promise Untuk membuka kamera
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                console.log('permission di jalankan') //conditional ini jika memenuhi untuk mengijinkan  membuka kamera maka apa yang harus di lakukan
            }
            else{
                console.log('tidak di ijinkan')
            }
        }
        catch(err){
            console.log(err)
        }
    } 
    render() {
        return (
            <View>
                <Button title='Ambil Gambar' onPress={()=> this.Permision()}/>
            </View>
        );
    }
}

export default PerMission;