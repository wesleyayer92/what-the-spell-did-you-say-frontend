import React from 'react'

import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TheBee from '../assets/bee.json';
import HomeModal from './HomeModal';

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
         {/* <TheBee /> */}
         {/* <HomeModal /> */}
      </View>

     
//      CASEY conflict from your code below. We just commented it out to push. 
// const _Instructions = () => {
//    return 'Blue'
// }
//    return (
      
//       <View style={{flex: 1}}>
      
    

//       <View >
//          <View style= {{color: 'red', backgroundColor:'black'}}>
//             <TouchableOpacity style = {{fontFamily: 'Chalkduster', fontSize: 30, color: 'white', backgroundColor: 'black', margin: 128}} onPress = {goToQuiz}>
//                <Text style={{color: 'yellow'}}>Welcome to the Spelling Game</Text>
//             </TouchableOpacity>
//          </View>
//            <Button title='Instructions'onPress={() => {_Instructions; }}>
//                Instructions
//             </Button>
//       </View>
//       <HomeModal />
//       </View>
      

//       <TouchableOpacity style = {{ margin: 128 }} onPress = {goToQuiz}>
//          <Text style={{fontFamily: 'Chalkduster', fontSize: 30, color: 'white', backgroundColor: 'black'}}>This is HOME!</Text>
//       </TouchableOpacity>


   )
}
export default Home