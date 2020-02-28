import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Tts from 'react-native-tts';

export default class TextToVoice extends Component {
  say = () => {
    Tts.speak('definition');
  }
  
  render() {
    return (
      <View>
        <Button title="click here for some speech yo" onPress={this.say}></Button>
      </View>
    );
  }
}

