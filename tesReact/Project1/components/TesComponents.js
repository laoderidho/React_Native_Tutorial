import React, { Component } from 'react'
import { View, Text} from 'react-native'


class TesComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{ backgroundColor:'#1e88e5', alignItems: 'center', paddingVertical:10, elevation: 12}}>
                <Text style={{color: 'white'}}>Header</Text>
            </View>
        );
    }
}

export default TesComponents;