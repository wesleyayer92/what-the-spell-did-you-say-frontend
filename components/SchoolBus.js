import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from "lottie-react-native";


 
    export default class Schoolbus extends React.Component {



  render() {
    return (
  <View title='lottie' style={{width: 400, height: 400}}>
          <LottieView
            source={require("../assets/schoolbus.json")}
            loop
            autoPlay
  />
  </View>

    );
  }
}