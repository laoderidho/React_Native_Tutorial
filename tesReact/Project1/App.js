import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Components from './components/Components';
import TesComponents from './components/TesComponents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='default' backgroundColor='#64b5f6'/>
        <TesComponents/>
        <Components />
      </View>
    );
  }
}
/* 
  - Untuk syntax xml lihat di file Components/components.js
*/
export default App;