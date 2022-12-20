import React, { Component } from 'react'
import {View, Text, Alert , Button} from 'react-native'

class TesFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    tesFunc= ()=>{
        Alert.alert('Warning', 'ini adalah Alert', [{text:'cancel'}, {text: 'OK'}])
    }
    render() {
        return (
            <View>
                <Text>Coba Tekan Tombol di bawah ini</Text>
                <Button title='tekan ini' onPress={()=>this.tesFunc()}/>
            </View>
        );
    }
}

export default TesFunction;