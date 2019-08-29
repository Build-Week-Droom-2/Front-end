import React, {useState, useEffect} from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {Field, withFormik} from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompanyRegistration = ({errors,touched,values,status, handleSubmit}) => {
  const [user,setUser] = useState();

  const jobsLocal = window.localStorage.getItem("jobs");
  const jobsParse = JSON.parse(jobsLocal);
  // console.log(jobsParse);

  useEffect(() => {

      if (status) {
        setUser(status);
      }
    }, [status]);

    if (user) {
      console.log(user);
      // jobsParse.push(user)
    }

  return(
    <div className="job-posting">
      <Link to='job-listings'>
        <Button animated color="green">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>
      </Link>  
        <div className="job-posting-top">
          <h1>New Job Posting</h1>
          
        </div>

        <Form className="form-component">

        {touched.name && errors.name && <p>{errors.name}</p>}
          <label>Title
            <Field type="text" name="name" placeholder="Title" />
          </label>

          {/* {touched.location && errors.location && <p>{errors.location}</p>}
          <label>location
            <Field type="text" name="location" placeholder="location" />
          </label> */}

          {touched.place && errors.place && <p>{errors.place}</p>}
          <label>Location
            <Field type="text" name="place" placeholder="Location" />
          </label>

          {touched.experience && errors.experience && <p>{errors.experience}</p>}
          <label>Experience Desired
            <Field name="experience" component="textarea" placeholder="Experience" />
          </label>

          {touched.education && errors.education && <p>{errors.education}</p>}
          <label>Education Desired
            <Field name="education" component="textarea" placeholder="Education" />
          </label>

          {touched.skills && errors.skills && <p>{errors.skills}</p>}
          <label>Skills Desired
            <Field name="skills" component="textarea" placeholder="Skills" />
          </label>

          {touched.workplacevalues && errors.workplacevalues && <p>{errors.workplacevalues}</p>}
          <label>Workplace Values
            <Field name="workplacevalues" component="textarea" placeholder="Workplace Values" />
          </label>

          <Button type='submit' color="blue" onClick={handleSubmit}>Post New Job</Button>
        </Form>
    </div>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, place, experience, education, skills, workplacevalues }) {
    return {
      name: name || "",
      place: place || "",
      experience: experience || "",
      education: education || "",
      skills: skills || "",
      workplacevalues: workplacevalues || ""
    };
  },
  
  //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Job Title Required"),
    place: Yup.string()
      .required("Location Required"),
    experience: Yup.string()
      .required("Experience Information Required"),
    education: Yup.string()
      .required("Education Information Required"),
    skills: Yup.string()
      .required("Skills Information Required"),
    workplacevalues: Yup.string()
      .required("Workplace Values Required"),
  }),
  //======END VALIDATION SCHEMA==========

  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    console.log("hi!");
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        // const uniqueID = new Date().getUTCMilliseconds();
        let date = new Date();
let components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
];

let uniqueID = components.join("");
        const {workplacevalues,place,name,experience,education,skills} = res.data
        setSubmitting(false);
        setStatus({ name: name, place: place, workplacevalues:workplacevalues, experience:experience, education:education,skills:skills, id: uniqueID });
        resetForm();
      });
  }
})(CompanyRegistration);
  
export default FormikLoginForm;