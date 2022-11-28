import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native'

class Tes1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' , backgroundColor: 'red', marginHorizontal: 12, marginVertical: 11, borderRadius: 50, elevation: 5}}>
                <TouchableOpacity onPress={()=> Alert.alert('Penting', 'Anda Mengklik Tombol', 
                [
                    {
                        text: 'cancel',
                        onPress: ()=> console.log('cancel di tekan'),
                        style: 'cancel'
                    },
                    {
                        text: 'Ok',
                        onPress: ()=> console.log('Ok di tekan')
                    }
                ])}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Ini adalah Tes1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Tes1;