import React, { Component } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import Components from './components/Components';
import TesComponents from './components/TesComponents';
import Tes1 from './components/Tes1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <StatusBar barStyle='dark-content' backgroundColor='#64b5f6'/>
        <TesComponents/>
        <Components />
        <Tes1/>
      </ScrollView>
    );
  }
}
/* 
  - Untuk syntax xml lihat di file Components/components.js
*/
export default App;