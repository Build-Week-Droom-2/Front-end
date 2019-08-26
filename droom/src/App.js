import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import PrivateRoute from './components/Login/PrivateRoute'
import UserRegistration from './components/Registration/UserRegistration';
import UserPage from './components/UserPage/UserPage';

import './App.css';

const DroomData = createContext();

function App() {
  return (
    <DroomData.Provider>
      <Router>
        {/* <UserRegistration /> */}
        <UserPage />
        <PrivateRoute exact path='/' component={Login}/>
       </Router>
    </DroomData.Provider>
  );
}

export default App;
