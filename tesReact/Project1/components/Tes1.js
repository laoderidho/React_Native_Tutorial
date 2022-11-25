import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'

class Tes1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' , backgroundColor: 'red', marginHorizontal: 12, marginVertical: 11, borderRadius: 50, elevation: 5}}>
                <TouchableOpacity onPress={()=> console.log('Hello World')}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Ini adalah Tes1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Tes1;