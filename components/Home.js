import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToQuiz = () => {
      Actions.quiz()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToQuiz}>
         <Text style={{fontFamily: 'Chalkduster', fontSize: 30, color: 'white', backgroundColor: 'black'}}>This is HOME!</Text>
      </TouchableOpacity>
   )
}
export default Home