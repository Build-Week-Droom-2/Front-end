import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './components/Login/PrivateRoute'

//imported components
import SplashPage from './components/SplashPage/SplashPage'
import Login from './components/Login/Login'
import WelcomeBack from './components/Login/WelcomeBack';
// import UserPage from './components/UserPage/UserPage';
// import JobPage from './components/JobProfile/JobPage';
// import UserRegistrationSplash from './components/Registration/UserRegistrationSplash';
// import GeneralRegistration from './components/Registration/GeneralRegistration';
// import JobListings from './components/JobProfile/JobListings';
// import EmployeeMatch from './components/Matches/EmployeeMatch';
// import JobMatch from './components/Matches/JobMatch';
// import UserRegistration from './components/Registration/UserRegistration';
// import RecruiterRegistration from './components/Registration/RecruiterRegistration';

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
