import React, {useState, useEffect} from 'react';
import { Image, Loader, Segment, Dimmer } from 'semantic-ui-react';


const WelcomeBack = (props) => {
    return ( 
    
    <div className="welcome-back">
        
        <h1 className="user-registration-splash-name">Welcome Back Matt!</h1>
        <Image src='https://picsum.photos/200' size='small' circular className="user-registration-avatar"/>
        <Loader active inline='centered' className="loader">Loading</Loader>
        
        
    </div> 
    
    );
}
 
export default WelcomeBack;