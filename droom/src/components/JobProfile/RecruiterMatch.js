import React, { useState, useEffect } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import RecruiterMatchRow from "./RecruiterMatchRow";
import { Link } from "react-router-dom";

const RecruiterMatch = props => {

  const employeesLocal = window.localStorage.getItem("employees");
  const employeesParse = JSON.parse(employeesLocal);
  const matchedEmployees = employeesParse.filter(emp=>{
    if(emp["match"]=="False"){
      return false;
    }
    return true;
  })
  
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
      <p>{employeesParse ? matchedEmployees.length : 0} Matches</p>
      {matchedEmployees.map(emp => {
        // if(emp["match"]=="False"){
        //   return false;
        // }
        return <RecruiterMatchRow emp={emp} key={emp.id} history={props.history}/>;
      })}
    </div>
  );
};

export default RecruiterMatch;
