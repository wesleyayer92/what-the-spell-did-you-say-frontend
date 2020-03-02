import React, { Component } from 'react'
import { View, Text, AppRegistry } from 'react-native';
import Quiz from './Quiz';
import Routes from './components/Routes'
export default class App extends Component {

//   callAPI() {
//     fetch('http://localhost:9000/testAPI')
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}))
//     .catch(err => err);
//   }
//   componentDidMount() {
//     this.callAPI();
// }
  render() {
    return (
      <View>
        <Routes />
      </View>
      <View style={{padding: 50}}>
        {/* <Text className='App-intro'>;{this.state.apiResponse}</Text> */}
        <Quiz />
        
      </View>
      
    );
  }
}

AppRegistry.registerComponent('App', () => App)

