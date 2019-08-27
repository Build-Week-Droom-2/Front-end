import React, {useState, useEffect} from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {Field, withFormik} from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const CompanyRegistration = ({errors,touched,values,status, handleSubmit}) => {
  const [user,setUser] = useState();

  useEffect(() => {

      if (status) {
        setUser([status]);
      }
    }, [status]);

    if (user) {
      console.log(user);
    }

  return(
    <div className="job-posting">
        <Button animated color="green">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>
        <div className="job-posting-top">
          <h1>New Job Posting</h1>
          
        </div>

        <Form className="form-component">

        {touched.title && errors.title && <p>{errors.title}</p>}
          <label>Title
            <Field type="text" name="title" placeholder="Title" />
          </label>

          {touched.location && errors.location && <p>{errors.location}</p>}
          <label>Location
          < Field component="input" type="text" name="location" placeholder="Location" />
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
  mapPropsToValues({ title, location, experience, education, skills, workplacevalues }) {
    return {
      title: title || "",
      location: location || "",
      // title: title || "",
      experience: experience || "",
      education: education || "",
      skills: skills || "",
      workplacevalues: workplacevalues || ""
    };
  },
  
  //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required("Job Title Required"),
    location: Yup.string()
      .required("Location Required"),
    // title: Yup.string()
    //   .required("Job Title Required"),
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
    //Check if email exists
    //axios post here
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        const {name,zip,title,experience,education,skills} = res.data
        setSubmitting(false);
        setStatus({ name: name, zip: zip, title:title, experience:experience, education:education,skills:skills });
        resetForm();
      });
  }
})(CompanyRegistration);
  
export default FormikLoginForm;