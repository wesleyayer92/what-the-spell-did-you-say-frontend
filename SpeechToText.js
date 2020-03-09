
import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground
} from 'react-native';
import Axios from 'axios';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

import Microphone from './components/Microphone';

const img = 'https://image.freepik.com/free-photo/desktop-with-assortment-school-supplies_23-2147654489.jpg';

const defaultOptions = {loop: false, autoplay: false};

export default function SpeechToText({ 
    _startRecognizing,
    _stopRecognizing,
    _destroyRecognizer,
    _answerChecker,
    nextWord,
    word,
    results,
    wordId,
    attemptCorrect
}) {

    postRequest = async() => {
      const url = `http://localhost:9000`;
      const data = {attemptCorrect, wordId};
      await Axios.post(url, data);
    }
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{alignSelf: 'center', margin: 50, height: 40, width: 200}}>
          
          <TouchableOpacity onPressIn={_startRecognizing} onPressOut={_stopRecognizing}>
        {/* <View title=‘lottie’ style={styles.microphone}> */}
          <LottieView
            options={defaultOptions}
            style={styles.microphone}
            // isStopped={this.state.isStopped}
            // isPaused={this.state.isPaused}
            source={require('./assets/mic2.json')}
            loop
            autoPlay={true}
            // onPress= {() => Voice.onSpeechStart} 
          />
            {/* </View> */}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {_answerChecker(results); postRequest();}}>
            <Text style={styles.button}>SUBMIT</Text>
          </TouchableOpacity>
          
          {/* <TouchableOpacity onPress={_startRecognizing}>
            <Text style={[styles.button, {backgroundColor: 'blue'}]}>Start Recording</Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity onPress={_stopRecognizing}>
            <Text style={[styles.button, {backgroundColor: 'orange'}]}>Stop</Text>
          </TouchableOpacity> */}

          <TouchableOpacity onPress={_destroyRecognizer}>
            <Text style={[styles.button, {backgroundColor: 'red'}]}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => nextWord()}>
            <Text style={[styles.button, {backgroundColor: 'silver'}]}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'purple',
      borderColor: 'white',
      borderWidth: 5,
      borderRadius: 12,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 5,
      textAlign:'center',
    },
    microphone: {
      alignSelf: 'center',
      width: 150,
      height: 150
    }
  });
