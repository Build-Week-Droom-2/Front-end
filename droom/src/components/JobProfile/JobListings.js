import React, { useState, useEffect } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Job from "./Job";
import { Link } from "react-router-dom";

const JobListings = props => {

  const jobsLocal = window.localStorage.getItem("jobs");
  const jobsParse = JSON.parse(jobsLocal);
  
  const jobBack = user => {
    return props.history.push("/recruiter-page");
  };

  return (
    <div className="job-listing">
      <Button onClick={jobBack} animated color="green">
        <Button.Content visible>Back</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow left" />
        </Button.Content>
      </Button>
      <p>{jobsParse ? jobsParse.length : 0} currently open positions</p>
      {jobsParse.map(job => {
        return <Job job={job} key={job.id} history={props.history}/>;
      })}
      <Link to='/job-posting'>
      <Button color="purple" className="new-job-btn">
        Create New Job
      </Button>
      </Link>
    </div>
  );
};

export default JobListings;
