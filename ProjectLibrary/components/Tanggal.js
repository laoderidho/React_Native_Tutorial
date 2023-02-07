import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker';

const Tanggal = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.date}>
            <TouchableOpacity onPress={()=> setOpen(true)}>
              <Text style={styles.text}>Klik date picker</Text>
            </TouchableOpacity>

            <DatePicker 
            modal
            open = {open}
            date = {date}
            onConfirm ={(date)=>{
              setOpen(false)
              setDate(date)
            }} 
            onCancel = {()=>{
              setOpen(false)
            }}
            />
        </View>
  );
}

export default Tanggal;

const styles = StyleSheet.create({
  date: {
    backgroundColor: '#2196f3',
    width : 150,
    padding: 11
  },
  text:{
    color: 'white'
  }
});