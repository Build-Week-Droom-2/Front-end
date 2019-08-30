import React, {useState, useEffect} from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {connect} from 'react-redux'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Job from '../UserPage/Job.js';
import {getMatched} from "../../Actions/actions.js"
import Loader from "react-loader-spinner";

const UserMatches = (props) => {
 const [jobs, setJobs] = useState([])


  useEffect(() => {
     props.getMatched()
     setJobs(props.matched)
  }, [])

  const handleClick = () => {
    props.history.push("/protected"); 

  }
  
 console.log(props.matched)
console.log(props)
    
    return ( 
        <div className="job-listing">
          <Button onClick={handleClick} animated color="green">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>
        <p>Matched Positions </p>
        {props.isFetching ? (
         <Loader
           type="BallTriangle"
           color="#22ba45"
           height={100}
           width={100}
         />
       ) : (
        props.matched.map(job=>{
          return <Job key ={job.id} job={job} />
        })
       )} 
      </div>
     );
}
 
const mapStateToProps = state => {
  // console.log('state',state)
  return {
      isFetching: state.isFetching,
      matched: state.matched,
  }
}
 
export default connect(mapStateToProps, {getMatched})(UserMatches);