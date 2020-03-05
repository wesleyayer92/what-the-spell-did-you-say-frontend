
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableHighlight,
    ScrollView,
    Button,
} from 'react-native';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SpeechToText({ 
    _startRecognizing,
    _stopRecognizing,
    // _cancelRecognizing,
    _destroyRecognizer,
    _answerChecker,
    word,
    // pitch,
    // error,
    // end,
    // started,
    results,
    // partialResults,
    attemptCorrect
}) {

    postRequest = () => {
      const url = `http://localhost:9000/testAPI`;
      const data = {attemptCorrect};
      Axios.post(url, data);
    }
    
    return (
      <SafeAreaView>
        <View>
          {/* <Text>
            🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝🐝
          </Text>
          <Text>
            Press mike to start Recognition
          </Text>
          <View>
            <Text>{`Started: ${started}`}</Text>
            <Text>{`End: ${end}`}</Text>
          </View>
          <View>
            <Text>{`Pitch \n ${pitch}`}</Text>
            <Text>{`Error \n ${error}`}</Text>
          </View> */}
          <Text style={results && word == results ? [styles.button, {backgroundColor: 'green', borderColor: 'yellow', color: 'yellow', marginBottom: 5}] : [styles.button, {backgroundColor: 'white', color: 'black', marginBottom: 5, borderColor: 'black'}]}>{results}</Text>
          
            <TouchableOpacity onPress={() => {_answerChecker(results); postRequest();}}>
              <Text style={styles.button}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_startRecognizing}>
              <Text style={[styles.button, {backgroundColor: 'blue'}]}>Start Recording</Text>
            </TouchableOpacity>

          {/* <Text>
            Partial Results
          </Text>
          <ScrollView>
            {partialResults.map((result, index) => {
              return (
                <Text key={`partial-result-${index}`}>
                    {result}
                </Text>
              );
            })}
          </ScrollView>
          <Text>CORRECT OR NOT</Text>
          {word.toUpperCase() == results ? <Text>{attemptCorrect.toString()}</Text> : <Text>nothing or not correct</Text>}
          <ScrollView>
            {results.map((result, index) => {
              return (
                <Text key={`result-${index}`}>
                  {result}
                </Text>
              );
            })}
          </ScrollView> */}

            <TouchableHighlight onPress={_stopRecognizing}>
              <Text style={[styles.button, {backgroundColor: 'orange'}]}>Stop</Text>
            </TouchableHighlight>

            {/* i don't see what the purpose of this button is
             so im commenting it out for now */}
            {/* <TouchableHighlight onPress={_cancelRecognizing}>
              <Text>Cancel</Text>
            </TouchableHighlight> */}

            <TouchableHighlight onPress={_destroyRecognizer}>
              <Text style={[styles.button, {backgroundColor: 'red'}]}>Reset</Text>
            </TouchableHighlight>
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
    padding: 12,
    textAlign:'center',
  }
});