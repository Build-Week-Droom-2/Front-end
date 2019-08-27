import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import PrivateRoute from './components/Login/PrivateRoute'
import UserRegistration from './components/Registration/UserRegistration';
import UserPage from './components/UserPage/UserPage';
import CompanyRegistration from './components/Registration/CompanyRegistration';
import SplashPage from './components/SplashPage/SplashPage';

import './App.css';

const DroomData = createContext();

function App() {
  return (
    <DroomData.Provider>
      <Router>
        
        <UserPage />
        
        {/* <UserRegistration /> */}
        {/* <CompanyRegistration /> */}
        {/* <SplashPage /> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <PrivateRoute exact path='/' component={Login}/>
       </Router>
    </DroomData.Provider>
  );
}

export default App;
