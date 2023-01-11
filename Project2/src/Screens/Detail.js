import {  Text, View, StyleSheet } from 'react-native'
import React, {} from 'react'


const Detail = ({route}) => {

  const {id} = route.params
  const {name} = route.params
  const {Jurusan} = route.params
  return (
    <View style={styles.parent}>
          
      <Text style={styles.detail}> Detail</Text>
      <View style={styles.ViewDetail}>
        <Text style={styles.textDetail}>id user: {id}</Text>
        <Text style={styles.textDetail}>Nama User: {name}</Text>
        <Text style={styles.textDetail}>Jurusan User: {Jurusan}</Text>
      </View>
      {/* <View style={styles.ViewDetail}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
      ViewDetail: {
        backgroundColor: '#4fc3f7',
        flex: 0,
        alignItems : 'center',
        marginHorizontal: 45,
        marginTop: 13,
        borderRadius : 10,
        elevation: 3,
        padding : 13
      },
      textDetail:{
        color: 'white'
      },
      detail:{
        fontSize : 20,
        color: 'white',
        backgroundColor : '#4fc3f7',
        padding : 12,
        textAlign : 'center'
      },
})

export default Detail