import React, { Component } from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native'


class TesFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            FilmAnime: [
                {
                    title: 'Kuzu No Honkai',
                    rating: 7.12
                },
                {
                    title: 'Tokyo Ghoul',
                    rating: 8.3
                },
                {
                    title: 'Fumetsu No Anata e',
                    rating: 7.12
                },
                {
                    title: 'Tensura Nikki',
                    rating: 7.12
                },
                {
                    title: 'Kizaru Win',
                    rating: 7.12
                },
                {
                    title: 'Naruto Shitposh',
                    rating: 7.12
                }
            ]
         };
    }
    render() {
        return (
            <ScrollView>
                <FlatList
                   data={this.state.FilmAnime}
                   renderItem={({item, index})=> 
                   <TouchableOpacity style={styles.flat} 
                    onPress={()=>ToastAndroid.show(`ini adalah ${item.title} dengan rating ${item.rating}`, ToastAndroid.SHORT)}
                   >
                        <Text style={styles.text}>Title: {item.title}</Text>
                        <Text style={styles.text}>Rating: {item.rating}</Text>
                   </TouchableOpacity>}
                   keyExtractor={item=> item.FilmAnime}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flat:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e88e5',
        marginVertical: 12,
        marginHorizontal: 30,
        borderRadius: 40
    },
    text:{
        color:'white'
    }
})
export default TesFlatList;