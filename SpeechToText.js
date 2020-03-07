
import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Microphone from './components/Microphone';

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
      <SafeAreaView>
        <View>
          <Text style={results && word == results ? [styles.button, {backgroundColor: 'green', borderColor: 'yellow', color: 'yellow', marginBottom: 5}] : [styles.button, {backgroundColor: 'white', color: 'black', marginBottom: 5, borderColor: 'black'}]}>{results}</Text>
          
          {/* <Microphone onPress={_startRecognizing}/> */}

          <TouchableOpacity onPress={() => {_answerChecker(results); postRequest();}}>
            <Text style={styles.button}>SUBMIT</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={_startRecognizing}>
            <Text style={[styles.button, {backgroundColor: 'blue'}]}>Start Recording</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={_stopRecognizing}>
            <Text style={[styles.button, {backgroundColor: 'orange'}]}>Stop</Text>
          </TouchableOpacity>

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
    }
  });
