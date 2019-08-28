import React, {useState, useEffect} from 'react';
import { Button, Icon } from 'semantic-ui-react';


const GeneralRegistrationSplash = (props) => {
    console.log('props in GRS', props)
    const history = props.user.history;
    const handleClick = () =>{
        if(props.user.account=== 1){
            history.push('/recruiter-register');
         }if(props.user.account === 2) {
            history.push('/user-register');
        }
    }
        return(
        <div className="general-registration-splash">
        
            <h1 className="general-registration-splash-name">Thank you for joining us "{props.user.name}"</h1>
            <p>Thanks for joining Droom. You're just a few steps away from setting up your account.</p>
            <div className="balloon-top-row"><Icon name='marker' /><Icon name='marker' /></div>
            <div className="balloon-bottom-row"><Icon name='marker' /></div>
            <Button onClick={()=>handleClick()}>Continue</Button>
        </div> 
        )
}
 
export default GeneralRegistrationSplash;