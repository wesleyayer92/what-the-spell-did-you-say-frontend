import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from "lottie-react-native";


 
    export default class Bee extends React.Component {



  render() {
    return (
  <View title='lottie' style={{width: 200, height: 200}}>
    <Text>Hello</Text>
          <LottieView
            source={require("../assets/bee.json")}
            loop
            autoPlay
  />
  </View>

    );
  }
}