import React, {useState, useEffect} from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {Field, withFormik} from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import Job from './Job';

const JobListings = (props) => {

  const fakeJobList = ['Dolphin Psychologist', 'Floor Sweeper', 'Math Tutor']
    return ( 
        <div className="job-listing">
            <Button animated color="green">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>
        <p>{fakeJobList.length} currently open positions</p>
        {fakeJobList.map(job=>{
          return <Job job={job} />
        })}
        <Button color="purple" className="new-job-btn">Create New Job</Button>
        </div>
     );
}
 
export default JobListings;