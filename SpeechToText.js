
import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ImageBackground
} from 'react-native';
import axios from 'axios';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

const mic = require('./assets/mic2.json');

const books = require('./assets/bookclipart.png');

const defaultOptions = {loop: false, autoplay: false};

export default class SpeechToText extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        _startRecognizing: this.props._startRecognizing,
        _stopRecognizing: this.props._stopRecognizing,
        _destroyRecognizer: this.props._destroyRecognizer,
        _answerChecker: this.props._answerChecker,
        nextWord: this.props.nextWord,
        word: this.props.word,
        results: this.props.results,
        wordId: this.props.wordId,
        attemptCorrect: this.props.attemptCorrect,
        emailUsername: this.props.emailUsername
     }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
     return {
        _startRecognizing: nextProps._startRecognizing,
        _stopRecognizing: nextProps._stopRecognizing,
        _destroyRecognizer: nextProps._destroyRecognizer,
        _answerChecker: nextProps._answerChecker,
        nextWord: nextProps.nextWord,
        word: nextProps.word,
        results: nextProps.results,
        wordId: nextProps.wordId,
        attemptCorrect: nextProps.attemptCorrect,
        emailUsername: nextProps.emailUsername
     };
  }

  componentDidUpdate(prevProps, prevState) {
     if (prevProps.results !== this.props.results) {
        this.setState({
           _startRecognizing: this.props._startRecognizing,
           _stopRecognizing: this.props._stopRecognizing,
           _destroyRecognizer: this.props._destroyRecognizer,
           _answerChecker: this.props._answerChecker,
           nextWord: this.props.nextWord,
           word: this.props.word,
           results: this.props.results,
           wordId: this.props.wordId,
           attemptCorrect: this.props.attemptCorrect,
           emailUsername: this.props.emailUsername
        })
     }
  }

  postRequest = async () => {
     const url = `http://localhost:9000`;
     await this.state._answerChecker(this.state.results);
     // const data = { attemptCorrect, wordId };
     console.log('ATTEMPT: ', this.state.attemptCorrect)
     axios.post(url, { emailUsername: this.state.emailUsername, attemptCorrect: this.state.attemptCorrect, word: this.state.word })
                .then(response => {
                  console.log(`HERES POST REQUEST RESPONSE:`);
                  console.log(response.data);
              }, (err) => {console.log(err)})
  }

  render() {
     return (
        <SafeAreaView style={{ flex: 1 }}>
           <View style={{ alignSelf: 'center', margin: 50, height: 40, width: 200 }}>
              <TouchableOpacity onPressIn={this.state._startRecognizing} onPressOut={this.state._stopRecognizing}>
                 {/* <View title='lottie' style={styles.microphone}> */}
                 <LottieView
                    options={defaultOptions}
                    style={styles.microphone}
                    // isStopped={this.state.isStopped}
                    // isPaused={this.state.isPaused}
                    source={mic}
                    loop
                    autoPlay={true}
                 // onPress= {() => Voice.onSpeechStart} 
                 />
                 {/* </View> */}
              </TouchableOpacity>
              <ImageBackground source={books} style={{width: 260, height: 130, alignSelf: 'center'}}>
                <View style={{marginTop: 40, marginRight: 10}}>
                  <TouchableOpacity onPress={() => {this.postRequest(this.state.results); this.state.nextWord()}}>
                    <Text style={styles.button}>SUBMIT</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity onPress={() => this.state.nextWord()}>
                    <Text style={styles.button}>NEXT</Text>
                  </TouchableOpacity> */}
                </View>
              </ImageBackground>
           </View>
        </SafeAreaView>
     );
  }
}
  
  const styles = StyleSheet.create({
    button: {
      // backgroundColor: 'purple',
      // borderColor: 'white',
      // borderWidth: 5,
      // borderRadius: 12,
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 5,
      textAlign:'center',
      fontFamily: 'AmericanTypewriter'
    },
    microphone: {
      alignSelf: 'center',
      width: 150,
      height: 150
    }
  });
