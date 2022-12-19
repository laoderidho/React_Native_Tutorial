import React, { Component } from 'react'
import {View, Button, ToastAndroid, Alert} from 'react-native'

class TesButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Button title='Press me' onPress={()=>ToastAndroid.show(`ini adalah tombol saya`, ToastAndroid.SHORT)}/>
                <Button title='klik saya' onPress={()=>Alert.alert(`Penting`, `anda mengklik klik saya`, [
                    {
                        text: 'cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Ok',
                        style: 'cancel'
                    }
                ])} />
            </View>
        );
    }
}


export default TesButton;