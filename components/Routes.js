import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import Login from './Login';
import Quiz from '../Quiz';
import Scorecard from './Scorecard';

const Routes = () => (
   <Router>
      <Scene key="root">
         <Scene key="login" component={Login} title="Login" />
         <Scene key="home" component={Home} title="Home" />
         <Scene key="quiz" component={Quiz} title="Spelling Bee" />
         <Scene key="scorecard" component={Scorecard} title="Score Card" />
      </Scene>
   </Router>
)
export default Routes