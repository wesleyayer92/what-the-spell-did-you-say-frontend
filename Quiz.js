import React, { Component } from 'react'
import {
    Text,
    View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import SpeechToText from './SpeechToText';
import TextToVoice from './TextToVoice';

import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
import axios from 'axios';

const ENDPOINT = `http://localhost:9000/`;

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
            array: '',
            word: '',
            definition: '',
            partOfSpeech: '',
            index: 0,
            pitch: '',
            error: '',
            end: '',
            started: '',
            results: [],
            partialResults: [],
            attemptCorrect: false,
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

    nextWord = () => {
      if (this.state.index === 5) {
        this.setState({
          index: 0
        });
        Actions.scorecard();
      } else {
        this.setState({
          index: this.state.index + 1,
          word: this.state.array[this.state.index + 1].word,
          wordId: this.state.array[this.state.index + 1].wordid,
          definition: this.state.array[this.state.index + 1].definition,
          partOfSpeech: this.state.array[this.state.index + 1].partofspeech,
          results: ''
        })
      }
    }

    makeApiRequest = () => {
      axios.get(ENDPOINT)
          .then(r => {
            this.setState({
              array: r.data,
              word: r.data[0].word,
              wordId: r.data[0].wordid,
              definition: r.data[0].definition,
              partOfSpeech: r.data[0].partofspeech
            }, console.log(this.state))
          })
    }

    // makeApiRequest = () => {
    //     axios.get(ENDPOINT)
    //         .then(r => {
    //           this.setState({
    //             word: r.data[this.state.index].word,
    //             definition: r.data[this.state.index].definition,
    //             partOfSpeech: r.data[this.state.index].partofspeech,
    //           }, () => console.log(r.data));
    //         });
    // }
    
      ///////////////////////////////////////////////
    
    // componentDidMount() {
    //   console.log(this.state);
    // }
    
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
        let answer = this.state.word.toUpperCase();
        console.log(`ANSWER: ${answer}`);
        console.log(`RESULTS: ${results}`);
        if (answer == results) {
          this.setState({
            attemptCorrect: true
          });
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
      // console.log('===========================STATE=============================')
      // console.log(this.state)
        return (
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <View style={{flex: 3, backgroundColor: 'black'}}>
                <TextToVoice 
                  sayWord={this.sayWord}
                  sayDefinition={this.sayDefinition}
                  sayPartOfSpeech={this.sayPartofSpeech}
                  makeApiRequest={this.makeApiRequest}
                />
              </View>
              <View style={{flex: 2, backgroundColor: 'darkgrey', padding: 30}}>
                <SpeechToText
                  _startRecognizing={this._startRecognizing}
                  _stopRecognizing={this._stopRecognizing}
                  _destroyRecognizer={this._destroyRecognizer}
                  _answerChecker={this._answerChecker}
                  nextWord={this.nextWord}
                  word={this.state.word}
                  wordId={this.state.wordId}
                  results={this.state.results}
                  attemptCorrect={this.state.attemptCorrect}
                />
              </View>  
            </View>
        );
    }
}