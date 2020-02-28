import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Quiz from './Quiz';
export default class App extends Component {
  render() {
    return (
      <View style={{padding: 50}}>
        <Quiz />
      </View>
    );
  }
}
