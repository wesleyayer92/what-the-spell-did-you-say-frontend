// https://stackoverflow.com/questions/49721337/expo-anyway-of-adding-speech-to-text



//Example to Convert Speech to Text in React Native - Voice Recognition
import React, { Component } from 'react';
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
import Voice from '@react-native-community/voice';

import TextToVoice from './TextToVoice'

class App extends Component {
  state = {
    word: 'blue',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
  };
  
  constructor(props) {
    super(props);
    //Setting callbacks for the process status
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    //destroy the process after switching the screen 
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = e => {
    //Invoked when .start() is called without error
    // console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    // console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = e => {
    //Invoked when an error occurs. 
    // console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    // console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    }, console.log(this.state.results));
  };

  onSpeechPartialResults = e => {
    //Invoked when any results are computed
    // console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    // console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    this.setState({
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _answerChecker = async (results) => {
    // const answer = this.state.results
    const answer = 'BLUE'

    if (answer==results){
                    console.log('you got it right')
                  } else {
                    console.log('you got it wrong')
                  }
                  }
                  
  

  _cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    this.setState({
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 ,backgroundColor:'yellow'}}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Spelling 🐝
          </Text>
          <Text style={styles.instructions}>
            Press mike to start Recognition
          </Text>
          <View
            style={{
              // backgroundColor:'black',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                backgroundColor:'yellow',
                flex: 1,
                textAlign: 'center',
                color: '#B0171F',
              }}>{`Started: ${this.state.started}`}</Text>
            <Text
              style={{
                backgroundColor:'yellow',
                flex: 1,
                textAlign: 'center',
                color: '#B0171F',
              }}>{`End: ${this.state.end}`}</Text>
          </View>
          <View
            style={{
              backgroundColor:'yellow',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                backgroundColor:'yellow',
                flex: 1,
                textAlign: 'center',
                color: '#B0171F',
              }}>{`Pitch \n ${this.state.pitch}`}</Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                color: '#B0171F',
              }}>{`Error \n ${this.state.error}`}</Text>
          </View>
          <View>
            <Button title='answerChecker'
            onPress={this._answerChecker(this.state.results)}
            >answerChecker</Button>
            {/* {this.state.results == this.state.word && <Text>CORRECT!!!!</Text>} */}
          </View>
          
            <TextToVoice />
        
          
          <TouchableHighlight
            onPress={this._startRecognizing}
            style={{ marginVertical: 50, backgroundColor:'yellow' }}>
            <Image
              style={styles.button}
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
              }}
            />
          </TouchableHighlight>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              marginBottom: 1,
              fontWeight: '700',
            }}>
            Partial Results
          </Text>
          <ScrollView>
            {this.state.partialResults.map((result, index) => {
              return (
                <Text
                  key={`partial-result-${index}`}
                  style={{
                    backgroundColor:'yellow',
                    textAlign: 'center',
                    color: 'black',
                    marginBottom: 1,
                    fontWeight: '700',
                  }}>
                  {result}
                </Text>
              );
            })}
          </ScrollView>
          <Text style={styles.stat}>Results</Text>
          <ScrollView style={{ marginBottom: 42 }}>
            {this.state.results.map((result, index) => {
              return (
                <>
                <Text key={`result-${index}`} style={styles.stat}>
                  {result}
                </Text>
                <Text>Correct</Text>
                </>
              );
            })}
          </ScrollView>
          
          <View
            style={{
              backgroundColor:'yellow',
              flexDirection: 'row',
              alignItems: 'space-between',
              position: 'absolute',
              bottom: 0,
            }}>
            <TouchableHighlight
              onPress={this._stopRecognizing}
              style={{ flex: 1, backgroundColor: 'red' }}>
              <Text style={styles.action}>Stop</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this._cancelRecognizing}
              style={{ flex: 1, backgroundColor: 'red' }}>
              <Text style={styles.action}>Cancel</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this._destroyRecognizer}
              style={{ flex: 1, backgroundColor: 'red' }}>
              <Text style={styles.action}>Destroy</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    paddingVertical: 8,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#0000',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 1,
    marginTop: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;