import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './components/Login/PrivateRoute'

//imported components
import SplashPage from './components/SplashPage/SplashPage'
import Login from './components/Login/Login'
import WelcomeBack from './components/Login/WelcomeBack';

import './App.css';

const DroomData = createContext();

function App() {
  return (
    <DroomData.Provider>
      <Router>
        
        <SplashPage />

        {/* <Link to='/login'>Login</Link> */}
        <Route path='/login' component={Login}/>
        {/* <PrivateRoute exact path='/' component={} /> */}
        <Route path='/register' component={WelcomeBack} />
       </Router>
    </DroomData.Provider>
  );
}

export default App;
