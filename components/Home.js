import React from 'react'

import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Teacher from './Teacher';
import Schoolbus from './SchoolBus';
const gym = require('../assets/gymLayout.jpg');

const Home = (props) => {
   const goToQuiz = () => {
      Actions.quiz({emailUsername: props.emailUsername})
   }

   const goToScorecard = () => {
      Actions.scorecard({emailUsername: props.emailUsername})
   }

   return (
      <ImageBackground source={gym} style={{flex: 1}}>
         <TouchableOpacity style={{flex: 2, margin: 50, borderRadius: 20, backgroundColor: 'white'}} onPress={goToQuiz}>
            <Text style={{alignSelf: 'center', margin: 10, padding: 20, fontFamily: 'Chalkduster', fontSize: 20, color: 'white', backgroundColor: 'rgb(21, 64, 133)'}}>GO TO SCHOOL!</Text>
            <Schoolbus />
         </TouchableOpacity>
         <TouchableOpacity style={{flex: 3, margin: 50, borderRadius: 20, backgroundColor: 'rgb(21, 64, 133)'}} onPress={goToScorecard}>
            <Text style={{margin: 10, alignSelf: 'center', padding: 20, borderRadius: 20, fontFamily: 'Noteworthy', fontSize: 20, backgroundColor: 'white', color: 'rgb(21, 64, 133)'}}>{props.emailUsername}'s REPORT CARD!</Text>
            <Teacher />
         </TouchableOpacity>
      </ImageBackground>
   );
}

export default Home