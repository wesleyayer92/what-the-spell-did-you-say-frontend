import React from 'react';
import LottieView from "lottie-react-native";
 
export default class Teacher extends React.Component {
  render() {
    return (
      <LottieView
        source={require("../assets/teacher.json")}
        style={{marginTop: 10, width: 200, height: 200, alignSelf: 'center'}}
        loop
        autoPlay
      />
    );
  }
}