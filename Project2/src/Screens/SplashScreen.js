import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackActions } from '@react-navigation/native';



class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount () {
        setTimeout(()=>{
          this.props.navigation.navigate('Route') //splashscreen yang akan muncuk pertama dan menjadi load aplikasi
        }, 2000)
    }
    
    render() {
        return (
            <View>
                <Text>This SplashScreen</Text>
            </View>
        );
    }
}

export default SplashScreen;