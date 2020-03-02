import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home'
import About from './About'
import Quiz from '../Quiz'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "quiz" component = {Quiz} title = "Spelling Bee" />
      </Scene>
   </Router>
)
export default Routes