import React, { Component } from 'react'
import {View, Text, Button, ToastAndroid, Alert, Linking} from 'react-native'

class TesButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text onPress={()=>Linking.openURL('https://github.com/laoderidho/React_Native_Tutorial')}>Ini adalah Link Github Saya</Text>
                <Button title='Press me' onPress={()=>ToastAndroid.show(`ini adalah tombol saya`, ToastAndroid.SHORT)}/>
                <Button title='klik saya lagi' onPress={()=>Alert.alert(`Warning`, `apakah anda ingin keluar`, [
                    {
                        text: `cancel`,
                        onPress: ``,
                        style: 'cancel'
                    },
                    {
                        text: `Ok`

                    }
                ])} />
            </View>
        );
    }
}


export default TesButton;