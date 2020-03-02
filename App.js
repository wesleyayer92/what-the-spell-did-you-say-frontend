import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Routes from './components/Routes'

class reactTutorialApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)