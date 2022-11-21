import React, { Component } from 'react'
import { Text, View} from 'react-native'
import Components from './components/Components';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Components />
      </View>
    );
  }
}

export default App;