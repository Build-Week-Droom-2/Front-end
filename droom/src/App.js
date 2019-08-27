import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import PrivateRoute from './components/Login/PrivateRoute'
import UserPage from './components/UserPage/UserPage';
import JobPage from './components/JobProfile/JobPage';
import UserRegistrationSplash from './components/Registration/UserRegistrationSplash';
import WelcomeBack from './components/Login/WelcomeBack';

import './App.css';

const DroomData = createContext();

function App() {
  return (
    <DroomData.Provider>
      <Router>
        
        {/* <UserPage /> */}
        
        {/* <UserRegistration /> */}
        {/* <CompanyRegistration /> */}
        {/* <SplashPage /> */}
        <Link to='/login'>Login</Link>
        <Route path='/login' component={Login}/>
        {/* <PrivateRoute exact path='/' component={} /> */}
        <Route path='/register' component={UserRegistration} />
       </Router>
    </DroomData.Provider>
  );
}

export default App;
