import React from 'react'

import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TheBee from './TheBee';
import HomeModal from './HomeModal';
import Schoolbus from './SchoolBus';

const Home = () => {
   const goToQuiz = () => {
      Actions.quiz()
   }


   const goToScorecard = () => {
      Actions.scorecard()
   }

   return (
      <View style={{backgroundColor: 'black'}} >
     
         <TouchableOpacity onPress = {goToQuiz}>
            <Text style={{alignSelf: 'center', paddingTop: 20, fontFamily: 'Chalkduster', fontSize: 20, color: 'white', backgroundColor: 'black'}}>GO TO SCHOOL!</Text>
            <Schoolbus />
         </TouchableOpacity>
         <HomeModal />
         <TouchableOpacity onPress = {goToScorecard}>
            <Text style={{alignSelf: 'center', paddingTop: 20, fontFamily: 'Chalkduster', fontSize: 20, color: 'white', backgroundColor: 'black'}}>REPORT CARD!</Text>
         <TheBee />
         </TouchableOpacity>
         
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