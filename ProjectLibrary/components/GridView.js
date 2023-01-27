import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid'

const GridView = () => {

    data= [
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' }
    ]
  return (
    <View>
        <FlatGrid
            // menentukan 1 dimensi per data  
            itemDimension={150}
            //data
            data={data}
            renderItem={({ item }) => (
            <View style={{marginTop: 14, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: item.code}}>
                <Text>{item.name}</Text>
            </View>
            )}
        />
      <Text>GridView</Text>
    </View>
  )
}

export default GridView

const styles = StyleSheet.create({
   
})