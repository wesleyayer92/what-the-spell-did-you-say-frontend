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

We used react native community modules, which gave us access to the iphone's speech recognition. Our app stands out because
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


## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README.
For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## How to use?

Create a username and password. Once you log-in, head over to the quiz page to begin. Click “Word”
to hear the word, “Definition” to hear the definition, and “Part of Speech” to hear the part of Speech. 
Hold down the microphone button and spell the word, let go of the button once you have finished. If you make
a mistake, no problem, just click the eraser to start over. Click submit to go to the next word. Once you finish, 
you will be redirected to your scorecard page to see your current quiz score and your lifetime quiz score.


## Contribute

Let people know how they can contribute into your project. A contributing guideline will be a big plus.

## Credits

react-native-tts, @react-native-community/voice

### Created By: 

Wesley Ayer 
  https://github.com/wesleyayer92
  
Casey Fayard 
  github.com/cfayard

Travis Franklin
  github.com/Travis-Franklin


