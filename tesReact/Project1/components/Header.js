import React, { Component } from 'react'
import {View, Text} from 'react-native'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{backgroundColor:'red', padding : 20, alignItems: 'center', elevation: 5}}>
                <Text style={{color: 'white', fontWeight:'bold', fontSize: '22'}}>Ini adalah Header Saya</Text>
            </View>
        );
    }
}
//elevation = shadow 
export default Header;