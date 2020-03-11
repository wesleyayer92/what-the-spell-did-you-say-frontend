import React, { Component } from "react";
import { Button, Text, View, TouchableOpacityBase } from "react-native";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";
 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
 
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleModal}>
          <Text style={{fontWeight: 'bold', marginLeft: 36, marginTop: 7, fontFamily: 'Courier', fontSize: 20}}>INSTRUCTIONS</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
            {/* <View style={{ flex: 1 }}> */}
          <Text style={{marginTop: 30, fontSize: 20, color:'springgreen'}}><Text style={{color: 'yellow', fontWeight: 'bold'}}>ABOUT: </Text>{`\n\nWelcome to “What the Spell Did You Say?”, a learning application that helps you practice spelling. Using words from Scripps National Spelling Bee Competition, this application will quiz you on how to spell words by hearing the spoken word, along with the definition, and part of speech-just like a spelling bee competition. This application tracks your progress as you work your way through the library of words provided by Scripps.\n\n\n`}<Text style={{color: 'yellow', fontWeight: 'bold'}}>INSTRUCTIONS: </Text>{`\n\nClick “Word” to hear the word, “Definition” to hear the definition, and “Part of Speech” to hear the part of Speech. Hold down the microphone button and spell the word, let go of the button once you have finished. If you make a mistake, no problem, just click the eraser to start over. Click submit to go to the next word. Once you finish, you will be redirected to your scorecard page to see your current quiz score and your lifetime quiz score.\n`}</Text>
            <TouchableOpacity onPress={this.toggleModal}>
              <Text style={{backgroundColor: 'rgba(3, 3, 3, 0.5)', textAlign: 'center', fontSize: 30, color: 'yellow'}}>HIDE INSTRUCTIONS</Text>
            </TouchableOpacity>
        </Modal>
            {/* </View> */}
      </View>
    );
  }
}