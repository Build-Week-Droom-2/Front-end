import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import PrivateRoute from './components/Login/PrivateRoute'
import UserRegistration from './components/Registration/UserRegistration';
import UserPage from './components/UserPage/UserPage';
import JobPage from './components/JobProfile/JobPage';
import JobPosting from './components/Registration/JobPosting';
import SplashPage from './components/SplashPage/SplashPage';
import GeneralRegistration from './components/Registration/GeneralRegistration';
import GeneralRegistrationSplash from './components/Registration/GeneralRegistrationSplash';

import './App.css';

const DroomData = createContext();

function App() {
  return (
    <DroomData.Provider>
      <Router>
        
        <JobPage />

        <br />
        <br />
        <br />
        <br />
        <br />
        <JobPosting />
        <PrivateRoute exact path='/' component={Login}/>
       </Router>
    </DroomData.Provider>
  );
}

export default App;
