import React from 'react';
import { Link } from "react-router-dom";
import { Segment, Header, Icon, Modal, Button, } from 'semantic-ui-react';
import jobs from '../../fakeData/jobs';

const SplashPage = () => {
  window.localStorage.setItem('jobs', JSON.stringify(jobs));
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
              <Link to='/login'> <Button color="green">Sign In</Button></Link>
          </div>

          <div>
            <Modal size="tiny" trigger={<Button color="blue">Sign Up</Button>}>
              <Header icon='user circle' content='Please choose wisely!' />
              <Modal.Content>
                <p>
                    Are you looking for work or are you a job provider?
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Link to='/general-register/user'><Button  color='green' inverted>
                  <Icon name='checkmark' /> Job Seeker
                </Button></Link>
                <Link to='/general-register/recruiter'><Button color='blue' inverted>
                  <Icon name='checkmark' /> Job Provider
                </Button></Link>
              </Modal.Actions>
            </Modal>
           </div>
      </div>
  )
}

export default SplashPage;