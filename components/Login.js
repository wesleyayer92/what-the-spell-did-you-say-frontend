import React, { Component } from 'react'

import {
   TouchableOpacity, 
   Text, 
   TextInput, 
   View, 
   StyleSheet, 
   Button,
   ImageBackground
} from 'react-native';

import Modal from 'react-native-modal';

import Bee from './Bee';

const chalkboard = require('../assets/chalkGreenWEraser.jpg');
const paper = 'http://q-s-i.org/wp-content/uploads/2014/04/wrinkled_paper_texture__by_christianluannstock-d36jws6.jpg';
import { Actions } from 'react-native-router-flux';

import axios from 'axios';

// const defaultOptions = {loop: false, autoplay: false};

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         emailUsername: '',
         hash: '',
         loggedIn: false,
         isModalVisible: false
      };
   }

   goToHome = () => {
      Actions.home({emailUsername: this.state.emailUsername})
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
            loggedIn: false,
            isModalVisible: true
         })
      }
   }

   toggleModal = () => {
      if (this.state.loggedIn == false) {
         this.setState({
            isModalVisible: !this.state.isModalVisible
         })
      } else {
         return;
      }
   }

   render() {
      return (
         <View style={{flex: 1}}>
            <ImageBackground source={chalkboard} style={{flex: 5}}>
               <TouchableOpacity style={{flex: 1, marginTop: 20}} onPress={this.goToQuiz}>
                  <Text style={[styles.header, {color: 'white'}]}>What The <Text style={[styles.header, {color: 'yellow'}]}>SPELL</Text>{`\nDid You Say`}</Text><Text style={[styles.header, {color: 'yellow'}]}>!?</Text>
               </TouchableOpacity>
               <Bee style={{flex: 1}} />
            </ImageBackground>
            <ImageBackground source={{uri: paper}} style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', top: 0, left: 0}}>
               <View style={{marginLeft: 50, marginTop: 30}}>
                  <Text style={{textAlign: 'center', fontSize: 30}}>SIGN UP</Text>
                  <TouchableOpacity style={{alignSelf: 'center'}}>
                     <TextInput 
                        onChangeText={emailUsername => this.setState({emailUsername})} 
                        style={styles.input} 
                        value={this.state.emailUsername} 
                        placeholder="name"
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
                  <Button title="SUBMIT" onPress={() => this.createUser(this.state.name, this.state.emailUsername, this.state.hash)} />
               </View>
   
               <View style={{marginRight: 50, marginTop: 30}}>
                  <Text style={{textAlign: 'center', fontSize: 30}}>LOGIN</Text>
                  <TouchableOpacity style={{alignSelf: 'center'}}>
                     <TextInput 
                        onChangeText={emailUsername => this.setState({emailUsername})} 
                        style={styles.input} 
                        value={this.state.emailUsername} 
                        placeholder="name"
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
               {this.state.isModalVisible && <View style={{flex: 1}}><Button title="Show modal" onPress={this.toggleModal} /><Modal isVisible={this.state.isModalVisible}><Text style={{color: 'springgreen', textAlign: 'center'}}>DIDNT LOGIN CORRECTLY</Text><Button title="hide modal" onPress={this.toggleModal} /></Modal></View>}
            </ImageBackground>
            {this.state.loggedIn && <TouchableOpacity onPress={this.goToHome}><Text style={{fontFamily: 'Courier', padding: 30, textAlign: 'center', fontSize: 40}}>CONTINUE</Text></TouchableOpacity>}
         </View>
      );
   }
}

const styles = StyleSheet.create({
   header: {
      fontFamily: 'Chalkduster',
      fontSize: 40, 
      color: 'white', 
      textAlign: 'center'
   },
   input: {
      fontSize: 20,
      backgroundColor: 'white', 
      padding: 5, 
      borderColor: 'black', 
      alignSelf: 'flex-start', 
      borderWidth: 1, 
      borderRadius: 5
   }
})
export default Login;