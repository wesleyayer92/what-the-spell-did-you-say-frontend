import React from 'react';
import { View } from 'react-native';
import LottieView from "lottie-react-native";


 
export default class Schoolbus extends React.Component {
  render() {
    return (
        <LottieView
          source={require("../assets/schoolbus.json")}
          style={{marginTop: 12, width: 100, height: 100, alignSelf: 'center'}}
          loop
          autoPlay
        />
    );
  }
}