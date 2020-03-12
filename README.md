# What The SPELL Did You Say?!

## Description

A learning application that helps you practice spelling. Using words from Scripps National Spelling Bee Competition, 
this application will quiz you on how to spell words by hearing the spoken word, along with the definition, and part 
of speech-just like a spelling bee competition. This application tracks your progress as you work your way through 
the library of words provided by Scripps.

## Motivation

Wes, having a knack for foreign languages, found an api built by Merriam Websters' Collegiate Dictionary
that sparked an interest in developing an application that would teach kids how to spell.

## Screenshots
![](assets/Screen%20Shot%202020-03-12%20at%201.37.40%20PM.png)
![](assets/Screen%20Shot%202020-03-12%20at%201.41.09%20PM.png)

## Technologies Used

- React Native
- @react-native-community/voice
- Axios
- BodyParser
- Express
- Lottie-ios
- Lottie-react-native
- react-native-tts
- react-native-router-flux
- xcode

## Features

We used react native community modules, which gave us access to the iPhone's speech recognition. Our app stands out because
it utilizes text-to-voice and voice-to-text technology that turns a string into sound, and takes a sound and turns it into
a string. 

## Installation

- Mkdir, Git Clone both of these reposities into that directory: 
    https://github.com/cfayard/spellingBee-backend
    https://github.com/cfayard/speech-rec
- Inside of each directory, npm install
- Within the speech-rec directory, cd ios, pod-install
- npm start within the spellingBee-backend directory
- Within the speech-rec directory, cd .., npm run ios, this command should open your iPhone simulator and you should be up and running. 


## How to use?

Create a username and password. Once you log-in, head over to the quiz page to begin. Click “Word”
to hear the word, “Definition” to hear the definition, and “Part of Speech” to hear the part of Speech. 
Hold down the microphone button and spell the word, let go of the button once you have finished. If you make
a mistake, no problem, just click the eraser to start over. Click submit to go to the next word. Once you finish, 
you will be redirected to your scorecard page to see your current quiz score and your lifetime quiz score.

## Credits

react-native-tts, @react-native-community/voice

### Created By: 

Wesley Ayer 
  https://github.com/wesleyayer92
  
Casey Fayard 
  https://github.com/cfayard

Travis Franklin
   https://github.com/Travis-Franklin


