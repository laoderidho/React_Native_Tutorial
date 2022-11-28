import React, { Component } from 'react'
import {View, Button} from 'react-native'

class TesButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Button title='Press me' onPress={()=>console.log('Hello This My Button')}/>
            </View>
        );
    }
}


export default TesButton;