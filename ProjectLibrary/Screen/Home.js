import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Button,  } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Tanggal from '../components/Tanggal';

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

    const [modalVisible, setModalVisible] = useState(false)

    const toogleModal= () =>{
       setModalVisible(!modalVisible)
    }

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        style={styles.view1}
        colors={['#12c2e9', '#c471ed', '#f64f59']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={{color: '#ffff'}}>Hello</Text>
      </LinearGradient>

      {/* di bawah ini akan menjalankan toast jika di ketik */}
      <TouchableOpacity onPress={showToast}>
        <Text style={styles.touch}>Klik saya</Text>
      </TouchableOpacity>

      <View style={styles.openModal}>
        <Button title="Show Modal" onPress={toogleModal} />
      </View>
      <Modal
        style={styles.ModalStyle}
        isVisible={modalVisible}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}>
        <View style={styles.ViewModal}>
          <TouchableOpacity onPress={toogleModal}>
            <Icon name="times" color="black" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{paddingBottom: 13}}>This My Modal</Text>
        </View>
      </Modal>

      <Text onPress={() => navigation.navigate('GridView')}>
        Klik Grid View
      </Text>
      
      <Tanggal />
      <Toast />
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
    view1:{
       marginHorizontal: 19,
       marginVertical: 30,
       alignItems: 'center',
       padding: 14,
       elevation: 100
    },
    ModalStyle:{
        alignItems: 'center',
        height: 100,
        elevation: 5,
        backgroundColor: 'white',
        justifyContent: 'center',        
        marginHorizontal: 50,
        marginVertical: 200,
        position: 'relative',
        borderRadius: 20
    },
    touch:{
      backgroundColor: '#03a9f4',
      marginHorizontal: 140,
      marginVertical: 13,
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      padding: 13,
      borderRadius: 100
    },
    openModal:{
      marginHorizontal: 100,
      borderRadius: 50
    },
    ViewModal:{
      position: 'absolute',
      top: 3,
      right: 3
    }
})