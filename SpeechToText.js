
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

export default function SpeechToText({ 
    _startRecognizing,
    _stopRecognizing,
    _cancelRecognizing,
    _destroyRecognizer,
    _answerChecker,
    word,
    pitch,
    error,
    end,
    started,
    results,
    partialResults

}) {

    return (
      <SafeAreaView >
        <View>
          <Text>
            Spelling 🐝
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
          </View>
          <View>
            <Button title='answerChecker'
            // onPress={this._answerChecker(this.state.results)}
            >answerChecker</Button>
            {/* {this.state.results == this.state.word && <Text>CORRECT!!!!</Text>} */}
          </View>
          
          
            
          
          <Button title='START RECORDING' onPress={_startRecognizing} />
          
          <Text>
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
          <Text>Results</Text>
          {word.toUpperCase() == results ? <Text>Correct</Text> : <Text>nothing or not correct</Text>}
          <ScrollView>
            {results.map((result, index) => {
              return (
                <Text key={`result-${index}`}>
                  {result}
                </Text>
              );
            })}
          </ScrollView>
          
          <View>
            <TouchableHighlight onPress={_stopRecognizing}>
              <Text>Stop</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={_cancelRecognizing}>
              <Text>Cancel</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={_destroyRecognizer}>
              <Text>Destroy</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    );
  }

// const styles = StyleSheet.create({
//   button: {
//     width: 50,
//     height: 50,
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   action: {
//     width: '100%',
//     textAlign: 'center',
//     color: 'white',
//     paddingVertical: 8,
//     marginVertical: 5,
//     fontWeight: 'bold',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#0000',
//     marginBottom: 5,
//   },
//   stat: {
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 1,
//     marginTop: 30,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });