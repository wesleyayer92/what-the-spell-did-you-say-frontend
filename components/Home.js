import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToQuiz = () => {
      Actions.quiz()
   }

   const goToScorecard = () => {
      Actions.scorecard()
   }

   return (
      <View>
         <TouchableOpacity style = {{ margin: 128 }} onPress = {goToQuiz}>
            <Text style={{fontFamily: 'Chalkduster', fontSize: 30, color: 'white', backgroundColor: 'black'}}>GO TO QUIZ!</Text>
         </TouchableOpacity>

         <TouchableOpacity style = {{ margin: 128 }} onPress = {goToScorecard}>
            <Text style={{fontFamily: 'Chalkduster', fontSize: 30, color: 'white', backgroundColor: 'black'}}>GO TO SCORECARD!</Text>
         </TouchableOpacity>
      </View>
   )
}
export default Home