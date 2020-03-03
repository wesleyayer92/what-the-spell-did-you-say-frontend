import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Routes from './components/Routes'

class reactTutorialApp extends Component {
   constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
   }
   callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
   }
   
   componentWillMount() {
      this.callAPI();
   }


   render() {
      return (
         <View>
            <Text className="App-intro">;{this.state.apiResponse}</Text>
            <Routes />
         </View>
      )
   }
}
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)