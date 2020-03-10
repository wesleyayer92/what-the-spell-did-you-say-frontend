import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from "lottie-react-native";


 
    export default class Check extends React.Component {



  render() {
    return (
  <View title='lottie' style={{marginBottom: 400,marginLeft: 300,width: 100, height: 100}}>
    <Text></Text>
          <LottieView
            source={require("../assets/check.json")}
            loop
            autoPlay
  />
  </View>

    );
  }
}