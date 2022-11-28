import React, { Component } from 'react';
import {View, TextInput, StyleSheet} from 'react-native'

class TesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username: ''
        };
    }
    render() {
        return (
            <View>
                <TextInput 
                value={this.state.username}
                onChangeText={(value)=>this.setState({username:value})} //ini untuk membuat value bisa di ketik dan di masukkan
                style={styles.tes1}
                placeholder='isi email anda'
                 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tes1: {
        borderWidth: 1, 
        marginVertical: 15, 
        marginHorizontal: 30, 
        borderRadius: 40
    }
})

export default TesForm;