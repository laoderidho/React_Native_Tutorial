import {  Text, View, StyleSheet, Image, ScrollView, Linking } from 'react-native'
import React, {} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'


const About = () => {
  return (
    <ScrollView style={styles.parent}>
      <Text style={styles.detail}> About Me</Text>

      <View style= {styles.container}>

      <View style={styles.imgView}>
        <Image
          style={styles.img}
          // source={require('../../image/PROJECT1.png')}
          source = {{uri: 'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/313182280_198615029250787_5679394773073172304_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=LeTyoymGK8EAX_un8jC&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB1Ht_2lajn9IFheuPUS_LAwKdWHZVVRkrvDymdr23ELw&oe=63C3CA72&_nc_sid=8fd12b'}}
        />
      </View>

      <View style={styles.text}>
        <Text style={styles.profilTextParent}>Name</Text>
        <Text style={styles.profilTextChild} >La Ode Ridho Fahreza</Text>
        <Text style={styles.profilTextParent}>Faculty</Text>
        <Text style={styles.profilTextChild}>Information engginering</Text>
        <Text style={styles.profilTextParent}>job</Text>
        <Text style={styles.profilTextChild}> student in indonesian Advent University</Text>
      </View>
      
      <View style={styles.icon}>
       <Icon  onPress={()=> Linking.openURL('https://github.com/laoderidho')}
        name='github'
        size={50}
        color = 'black'
       />
      <Icon 
        name='facebook' onPress={()=> Linking.openURL('https://www.facebook.com/profile.php?id=100075312050308')}
        size={50}
        color = '#1565c0'
       />
       <Icon 
        name='instagram' onPress={()=> Linking.openURL('https://www.instagram.com/laode_ridho_fahreza/')}
        size={50}
        color = 'black'
       />
      </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
      detail:{
        fontSize : 20,
        color: 'white',
        backgroundColor : '#4fc3f7',
        padding : 12,
        textAlign : 'center'
      },
      img:{
        width: 200,
        height: 200,
        borderRadius: 100,
      },
      imgView:{
        alignItems: 'center',
        marginTop: 20,
      },
      text:{
        alignItems: 'center',        
      },
      container:{
        backgroundColor : 'white',
        height: 650,
        marginHorizontal: 13,
        marginVertical: 13,
        borderRadius: 10,
        elevation: 11
      },
      profilTextParent:{
        fontSize: 20,
        paddingTop : 10,
        color: 'black',
      },
      profilTextChild:{
        fontSize: 18,
        color: 'black'
      },
      icon:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 100
      },
      parent:{
        backgroundColor: 'white'
      }
})

export default About