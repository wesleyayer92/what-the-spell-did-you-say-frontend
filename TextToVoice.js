import React from 'react';
import { View, Button } from 'react-native';

export default function TextToVoice({sayWord, sayDefinition, sayPartOfSpeech}) {
    return (
      <View>
        <Button title='Word' onPress={sayWord} />
        <Button title='Definition' onPress={sayDefinition} />
        <Button title='Part of Speech' onPress={sayPartOfSpeech} />
      </View>
    );
}

