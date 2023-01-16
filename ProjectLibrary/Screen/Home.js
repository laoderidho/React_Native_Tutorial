import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Toast } from 'react-native-toast-message/lib/src/Toast'


const Home = ({navigation}) => {

    const showToast = ()=>{
       Toast.show({
        //tipe warna ada 3 success(hijau), error(merah), info(biru)
        type: 'success',
        text1: 'sukses',
        text2: 'ini adalah toast',
        //ini adalah waktu yang di haruskan untuk berapa waktu yang di butuhkan
        visibilityTime: 1000,
        //pada saat di tekan maka akan menjalankan perintah apa 
        onPress: ()=> console.log('this console')
       })
    }

  return (
    <View>
        <StatusBar translucent backgroundColor='transparent' />
        <LinearGradient style={styles.view1}
            colors={['#12c2e9', '#c471ed', '#f64f59']}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        >
          <Text style={{color: '#ffff'}}>Hello</Text>
        </LinearGradient>
        {/* di bawah ini akan menjalankan toast jika di ketik */}
       <TouchableOpacity onPress={showToast}>
          <Text>Klik saya</Text>
       </TouchableOpacity>

        <Toast />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    view1:{
       marginHorizontal: 19,
       marginVertical: 30,
       alignItems: 'center',
       padding: 14,
       elevation: 100
    }
})