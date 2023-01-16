import React,{Component} from 'react'
import {  View , Image, StyleSheet } from 'react-native'
import { StackActions } from '@react-navigation/native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        setTimeout(()=>{
            this.props.navigation.dispatch(StackActions.replace('Route'))
        }, 1500)
    }
    
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.container}>
                   <Image
                    source={require('../../asset/desain_interior.gif')}
                   />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent: 'center',
        height: 900
    },
    parent: {
        backgroundColor : '#ffff'
    }
})
export default SplashScreen;