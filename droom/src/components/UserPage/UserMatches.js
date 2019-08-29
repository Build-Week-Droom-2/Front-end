import React, {useState, useEffect} from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {connect} from 'react-redux'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Job from '../UserPage/Job.js';
import {getData} from "../../Actions/actions.js"

const UserMatches = (props) => {
 const [jobs, setJobs] = useState([])
  useEffect(() => {
     props.getData()
  }, [])
console.log(props.data)
    return ( 
        <div className="job-listing">
            <Button animated color="green">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>
        <p>Matched Positions </p>
        {(props.data.name === 'Chris')
          && props.data.matchedJobs.map(job=>{
          return <Job key ={job} job={job} />
        })}
        <Button color="purple" className="new-job-btn">Create New Job</Button>
        </div>
     );
}

const mapStateToProps = state => {
  // console.log('state',state)
  return {
      data: state.data,
  }
}
 
export default connect(mapStateToProps, {getData})(UserMatches);