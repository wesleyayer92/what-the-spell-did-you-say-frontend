import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TextToVoice({sayWord, sayDefinition, sayPartOfSpeech, makeApiRequest}) {
    return (
      <View>
        <Text style={[styles.chalky, {textAlign: 'center', fontSize: 40, textDecorationLine: 'none'}]}>{`Hello, class! :)\n`}</Text>
        
        <TouchableOpacity onPress={sayWord}>
          <Text style={styles.chalky}>1. Word</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sayDefinition}>
          <Text style={styles.chalky}>2. Definition</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sayPartOfSpeech}>
          <Text style={styles.chalky}>3. Part of Speech</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={makeApiRequest}>
          <Text style={styles.chalky}>4. Make Api Request</Text>
        </TouchableOpacity>
      </View>
    );
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

