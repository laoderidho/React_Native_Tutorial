import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
            <View style={styles.nav}>
                <Text style={styles.navText} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.navText} onPress={()=> this.props.navigation.navigate('Detail')} >Detail</Text>
                <Text style={styles.navText} onPress={()=> this.props.navigation.navigate('About')}>About</Text>
            </View>
                <Text>This Text</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nav:{
      flex :0,
      backgroundColor : '#29b6f6',
      elevation : 13,
      flexDirection : 'row'
    },
    navText:{
      color :'white',
      padding: 13,
      fontSize: 15
    }
})
export default Detail;