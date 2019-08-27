import React, {useState, useEffect} from 'react';
import { Button, Icon } from 'semantic-ui-react';


const UserRegistrationSplash = (props) => {
    return ( 
    
    <div className="user-registration-splash">
        <div className="hand-top-row"><Icon name='winner' /></div>
        <h1 className="user-registration-splash-name">Nice Work!</h1>
        <div className="hand-bottom-row"><Icon name='winner' /><Icon name='winner' /></div>
        <h2>Ready for an awesome job?</h2>
        <p>Your profile is all filled out</p>
    </div> 
    
    );
}
 
export default UserRegistrationSplash;