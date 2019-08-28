import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './components/Login/PrivateRoute'

//imported components
import SplashPage from './components/SplashPage/SplashPage'
import Login from './components/Login/Login'
import WelcomeBack from './components/Login/WelcomeBack';
import RecruiterRegistration from './components/Registration/RecruiterRegistration'
import GeneralRegistration from './components/Registration/GeneralRegistration'

import './App.css';

const DroomData = createContext();

function App() {

  return (
    <DroomData.Provider>
      <Router>
        
        {/* <UserPage /> */}
        
        {/* <UserRegistration /> */}
        {/* <CompanyRegistration /> */}
        <Route exact path='/' component={SplashPage} />
        {/* <Link to='/login'>Login</Link> */}
        <Route exact path='/login' component={Login}/>
        {/* <PrivateRoute exact path='/' component={} /> */}
        {/* <Route path='/register'  component={GeneralRegistration} /> */}
        <Route path='/general-register' render={props => (
          <GeneralRegistration {...props}/>
         )}/>
         <Route path='/job-provider/register' component={RecruiterRegistration}/>
       </Router>
    </DroomData.Provider>
  );
}

export default App;
