import React from 'react'

import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Teacher from './Teacher';
import Schoolbus from './SchoolBus';

const Home = (props) => {
   const goToQuiz = () => {
      Actions.quiz({emailUsername: props.emailUsername})
   }

   const goToScorecard = () => {
      Actions.scorecard({emailUsername: props.emailUsername})
   }

   return (
      <View style={{flex: 1, backgroundColor: 'black'}} >
         <TouchableOpacity style={{flex: 2, margin: 30, backgroundColor: 'silver'}} onPress={goToQuiz}>
            <Text style={{alignSelf: 'center', margin: 10, padding: 30, fontFamily: 'Chalkduster', fontSize: 20, color: 'white', backgroundColor: 'purple'}}>GO TO SCHOOL!</Text>
            <Schoolbus />
         </TouchableOpacity>
         <TouchableOpacity style={{flex: 3, margin: 30, backgroundColor: 'silver'}} onPress={goToScorecard}>
            <Text style={{alignSelf: 'center', margin: 10, padding: 30, fontFamily: 'Chalkduster', fontSize: 20, color: 'white', backgroundColor: 'red'}}>{props.emailUsername}'s REPORT CARD!</Text>
            <Teacher />
         </TouchableOpacity>
      </View>
   );
}

export default Home