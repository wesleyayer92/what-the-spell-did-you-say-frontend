import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TextToVoice extends React.Component {
    // makeApiRequest();
    componentDidMount() {
      this.props.makeApiRequest();
    }
    // ({sayWord, sayDefinition, sayPartOfSpeech, makeApiRequest})

    render() {
      return (
        <View>
          <Text style={[styles.chalky, {textAlign: 'center', fontSize: 40, textDecorationLine: 'none'}]}>{`Hello, ${this.props.emailUsername} :)\n`}</Text>
          
          <TouchableOpacity onPress={this.props.sayWord}>
            <Text style={styles.chalky}>1. Word</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.sayDefinition}>
            <Text style={styles.chalky}>2. Definition</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.sayPartOfSpeech}>
            <Text style={styles.chalky}>3. Part of Speech</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={makeApiRequest}>
            <Text style={styles.chalky}>4. Make Api Request</Text>
          </TouchableOpacity> */}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  chalky: {
    fontFamily: 'Chalkduster', 
    fontSize: 30, 
    color: 'white',
    textDecorationLine: 'underline'
    // backgroundColor: 'black'
  }
})

