import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Button, Icon, Input, Label } from 'semantic-ui-react';

const SplashPage = () => {

    return (

        <div className="splash-page">
            <div className="splash-page-top">
                <h1>Droom</h1>
                <p>Job-hunting the easy way.</p>
            </div>

            <Icon name='user' circular className="splash-row-one" size="big"/>
            <Segment className="splash-row-segment-one">Create an Account</Segment>
            <Icon name='users' circular className="splash-row-two" size="big"/>
            <Segment className="splash-row-segment-two">Match with Employers</Segment>
            <Icon name='user md' circular className="splash-row-three" size="big"/>
            <Segment className="splash-row-segment-three">Land your dream job</Segment>

            <div>
                <Button color="green">Sign In</Button>
            </div>

            <div>
                <Button color="blue">Sign Up</Button>
            </div>
        </div>

    );
}

export default SplashPage;