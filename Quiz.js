import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableO
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import SpeechToText from './SpeechToText';
import TextToVoice from './TextToVoice';

import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
import axios from 'axios';

const ENDPOINT = `http://localhost:9000/testAPI`;

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        Voice.onSpeechStart = this.onSpeechStart;
        Voice.onSpeechEnd = this.onSpeechEnd;
        Voice.onSpeechError = this.onSpeechError;
        Voice.onSpeechResults = this.onSpeechResults;
        Voice.onSpeechPartialResults = this.onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
        
        this.state = {
            word: '',
            definition: '',
            partOfSpeech: '',
            pitch: '',
            error: '',
            end: '',
            started: '',
            results: [],
            partialResults: [],
        };
    }

    sayWord = () => {
        Tts.speak(this.state.word);
    }
    
    sayDefinition = () => {
        Tts.speak(this.state.definition);
    }
    
    sayPartofSpeech = () => {
        Tts.speak(this.state.partOfSpeech);
    }

    makeApiRequest = () => {
        axios.get(ENDPOINT)
            .then(r => {
              this.setState({
                word: r.data.word,
                definition: r.data.definition,
                partOfSpeech: r.data.partofspeech,
              }, () => console.log(r.data));
            })
    }
    
      ///////////////////////////////////////////////
    
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
        let answer = this.state.word;
    
        if (answer == results[0]) {
          return (
            <Text>Correct</Text>
          );
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
            <View>
                <TextToVoice 
                  sayWord={this.sayWord}
                  sayDefinition={this.sayDefinition}
                  sayPartOfSpeech={this.sayPartofSpeech}
                  makeApiRequest={this.makeApiRequest}
                />
                <SpeechToText 
                  _startRecognizing={this._startRecognizing}
                  _stopRecognizing={this._stopRecognizing}
                  _cancelRecognizing={this._cancelRecognizing}
                  _destroyRecognizer={this._destroyRecognizer}
                  _answerChecker={this._answerChecker}
                  word={this.state.word}
                  pitch={this.state.pitch}
                  error={this.state.error}
                  end={this.state.end}
                  started={this.state.started}
                  results={this.state.results}
                  partialResults={this.state.partialResults}
                />
            </View>
        );
    }
}