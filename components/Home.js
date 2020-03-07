import React, { Component } from 'react'

import {
   TouchableOpacity, 
   Text, 
   TextInput, 
   View, 
   StyleSheet, 
   Button 
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import TheBee from '../assets/bee.json';
import HomeModal from './HomeModal';

import axios from 'axios';
const ENDPOINT = 'http://localhost:9000/signup';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: 'Casey',
         emailUsername: 'casey@gmail.com',
         hash: '123'
      };
   }
   
   goToQuiz = () => {
      Actions.quiz()
   }

   goToScorecard = () => {
      Actions.scorecard()
   }

   createUser = async(name, emailUsername, hash) => {
      const url = `http://localhost:9000/signup`;
      const data = {name, emailUsername, hash};
      await axios.post(url, data);
   }

   userLogin = () => {
      // ?????????????
   }


   




   // return (
   //    <View>
   //       <TouchableOpacity style={{margin: 128}} onPress={goToQuiz}>
   //          <Text style={{fontFamily: 'Chalkduster', fontSize: 30, color: 'white', backgroundColor: 'black'}}>GO TO QUIZ!</Text>
   //       </TouchableOpacity>

   //       <TouchableOpacity style={{margin: 128}} onPress={goToScorecard}>
   //          <Text style={{fontFamily: 'Chalkduster', fontSize: 30, color: 'white', backgroundColor: 'black'}}>GO TO REPORT CARD!</Text>
   //       </TouchableOpacity>
   //       <TouchableOpacity style={{alignSelf: 'center'}}>
   //          <TextInput style={{backgroundColor: 'white', padding: 5, borderColor: 'black', alignSelf: 'flex-start', borderWidth: 1, borderRadius: 5}} placeholder="email"></TextInput>
   //       </TouchableOpacity>
   //       <TouchableOpacity style={{alignSelf: 'center'}}>
   //          <TextInput style={{backgroundColor: 'white', padding: 5, borderColor: 'black', alignSelf: 'flex-start', borderWidth: 1, borderRadius: 5}} placeholder="password"></TextInput>
   //       </TouchableOpacity>
   //       {/* <TheBee /> */}
   //       {/* <HomeModal /> */}
   //    </View>

     
//      CASEY conflict from your code below. We just commented it out to push. 
   render() {
      return (
         <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor:'black'}}>
               <TouchableOpacity style={styles.header} onPress={this.goToQuiz}>
                  <Text style={{color: 'yellow'}}>Welcome to the Spelling Game</Text>
               </TouchableOpacity>
               <HomeModal />
            </View>
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
               <Text style={{textAlign: 'center'}}>SIGN UP</Text>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput style={styles.input} placeholder="name"></TextInput>   
               </TouchableOpacity>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput style={styles.input} placeholder="email"></TextInput>
               </TouchableOpacity>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput style={styles.input} placeholder="password"></TextInput>
               </TouchableOpacity>
               <Button title="SUBMIT" onPress={() => this.createUser(this.state.name, this.state.emailUsername, this.state.hash)} />
   
               <Text style={{textAlign: 'center'}}>LOGIN</Text>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput style={styles.input} placeholder="name"></TextInput>
               </TouchableOpacity>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput style={styles.input} placeholder="email"></TextInput>
               </TouchableOpacity>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput style={styles.input} placeholder="password"></TextInput>
               </TouchableOpacity>
               <Button title="SUBMIT" onPress={this.userLogin} />
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   header: {
      fontFamily: 'Chalkduster',
      fontSize: 30, 
      color: 'white', 
      backgroundColor: 'black', 
      margin: 128
   },
   input: {
      backgroundColor: 'white', 
      padding: 5, 
      borderColor: 'black', 
      alignSelf: 'flex-start', 
      borderWidth: 1, 
      borderRadius: 5
   }
})
export default Home