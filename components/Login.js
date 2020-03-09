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

import axios from 'axios';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         emailUsername: '',
         hash: '',
         loggedIn: false
      };
   }

   goToHome = () => {
      Actions.home()
   }

   createUser = async(name, emailUsername, hash) => {
      const url = `http://localhost:9000/signup`;
      const data = {name, emailUsername, hash};
      await axios.post(url, data);
   }

   userLogin = async(emailUsername, hash) => {
      const url = `http://localhost:9000/login`;
      const data = {emailUsername, hash};
      const response = await axios.post(url, data);
      console.log(response.data);
      if (response.data == 'ITS WORKING') {
         this.setState({
            loggedIn: true
         })
      } else {
         this.setState({
            loggedIn: false
         })
      }
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
            </View>
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
               <Text style={{textAlign: 'center'}}>SIGN UP</Text>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput 
                     onChangeText={name => this.setState({name})} 
                     style={styles.input} 
                     value={this.state.name} 
                     placeholder="name"
                  />   
               </TouchableOpacity>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput 
                     onChangeText={emailUsername => this.setState({emailUsername})} 
                     style={styles.input} 
                     value={this.state.emailUsername} 
                     placeholder="email"
                  />
               </TouchableOpacity>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput 
                     onChangeText={hash => this.setState({hash})} 
                     style={styles.input} 
                     value={this.state.hash} 
                     placeholder="password"
                  />
               </TouchableOpacity>
               <Button title="SUBMIT" onPress={() => this.createUser(this.state.name, this.state.emailUsername.toLowerCase(), this.state.hash)} />
   
               <Text style={{textAlign: 'center'}}>LOGIN</Text>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput 
                     onChangeText={emailUsername => this.setState({emailUsername})} 
                     style={styles.input} 
                     value={this.state.emailUsername} 
                     placeholder="email"
                  />
               </TouchableOpacity>
               <TouchableOpacity style={{alignSelf: 'center'}}>
                  <TextInput 
                     onChangeText={hash => this.setState({hash})}
                     style={styles.input}
                     value={this.state.hash}
                     placeholder="password"
                  />
               </TouchableOpacity>
               <Button title="SUBMIT" onPress={() => this.userLogin(this.state.emailUsername, this.state.hash)} />
            </View>
            {this.state.loggedIn && <Button title="GO HOME" onPress={this.goToHome} />}
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
export default Login;