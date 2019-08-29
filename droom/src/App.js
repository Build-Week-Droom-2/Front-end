import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './components/Login/PrivateRoute'

//imported components
import SplashPage from './components/SplashPage/SplashPage'
import Login from './components/Login/Login'
import WelcomeBack from './components/Login/WelcomeBack';
import RecruiterRegistration from './components/Registration/RecruiterRegistration'
import GeneralRegistrationUser from './components/Registration/GeneralRegistrationUser'
import GeneralRegistrationRecruiter from './components/Registration/GeneralRegistrationRecruiter'
import UserRegistration from './components/Registration/UserRegistration';
import UserPage from './components/UserPage/UserPage';
import RecruiterPage from './components/JobProfile/RecruiterPage';
import EditRecruiter from './components/UserPage/EditRecruiter';
import EditUser from './components/UserPage/EditUser';
import UserMatches from './components/UserPage/UserMatches';   


import './App.css';

function App() {

  return (

      <Router>
        {/* <UserPage /> */}
        
        {/* <UserRegistration /> */}
        {/* <CompanyRegistration /> */}
        <Route exact path='/' component={SplashPage} />
        {/* <Link to='/login'>Login</Link> */}
        <Route exact path='/login' component={Login}/>
        <PrivateRoute exact path='/protected' component={UserPage} />
        <Route exact path='/recruiter-page' component={RecruiterPage} />
        {/* <Route path='/register'  component={GeneralRegistration} /> */}
        <Route path='/general-register/user' render={props => (
          <GeneralRegistrationUser {...props}/>
         )}/>
         <Route path='/general-register/recruiter' component={GeneralRegistrationRecruiter}/>
          <Route exact path='/recruiter-register' component={RecruiterRegistration}/>
          <Route path='/user-register' component={UserRegistration}/>
          {/* <Route path='/user-page' component={UserPage}/> */}
          <Route path='/edit-recruiter' component={EditRecruiter}/>
          <Route path='/edit-user' component={EditUser}/>
          <PrivateRoute exact path='/protected/user-matches' component={UserMatches} />
          {/* <Route path='/recruiter-page' component={RecruiterPage}/> */}
       </Router>
  );
}

export default App;
