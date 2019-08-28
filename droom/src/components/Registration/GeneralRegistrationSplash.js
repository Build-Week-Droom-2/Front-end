import React, {useState, useEffect} from 'react';
import { Button, Icon } from 'semantic-ui-react';


const GeneralRegistrationSplash = (props) => {
    console.log(props.user);
    return ( 
    
    <div className="general-registration-splash">
        
        <h1 className="general-registration-splash-name">{props.user.name}</h1>
        <p>Thanks for joining Droom. You're just a few steps away from setting up your account.</p>
        <div className="balloon-top-row"><Icon name='marker' /><Icon name='marker' /></div>
        <div className="balloon-bottom-row"><Icon name='marker' /></div>

        <h3 className="general-registration-splash-question">To begin, are you a job seeker or an employer?</h3>
        <Button>Job Seeker</Button>
        <Button>Employer</Button>

    </div> 
    
    );
}
 
export default GeneralRegistrationSplash;