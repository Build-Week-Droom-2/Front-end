import React, {useState, useEffect} from 'react';
import { Button, Checkbox, Form, Image, Icon } from 'semantic-ui-react';
import {Field, withFormik} from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const GeneralRegistration = ({errors,touched,values,status, handleSubmit}) => {
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
    <div className="user-registration">
        <Button animated color="green">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>

        <div className="user-registration-top">
          <h1>The wait is over</h1>
          <p>Discover your dream job today</p>
          {/* <p>Let's get started on filling out your bio...</p> */}
          <Image src='https://picsum.photos/200' size='small' circular className="user-registration-avatar"/>
        </div>

        <Form className="form-component">

          {touched.name && errors.name && <p>{errors.name}</p>}
          <label>Full Name
            <Field component="input" type="text" name="name" placeholder="Name" />
          </label>

          {touched.zip && errors.zip && <p>{errors.zip}</p>}
          <label>Email
            <Field type="text" name="email" placeholder="Email" />
          </label>

          {touched.title && errors.title && <p>{errors.title}</p>}
          <label>Password
            <Field type="password" name="password" placeholder="Password" />
          </label>

          {touched.experience && errors.experience && <p>{errors.experience}</p>}
          <label>Confirm Password
            <Field name="confirm" component="password" placeholder="Confirm Password" />
          </label>

          <Button type='submit' color="blue" onClick={handleSubmit}>Create Account</Button>
        </Form>
    </div>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password, confirm }) {
    return {
      name: name || "",
      zip: zip || "",
      title: title || "",
      experience: experience || "",
      education: education || "",
      skills: skills || ""
    };
  },
  
  //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name Required"),
    zip: Yup.string()
      .required("Zip Code Required"),
    title: Yup.string()
      .required("Job Title Required"),
      experience: Yup.string()
      .required("Experience Information Required"),
      education: Yup.string()
      .required("Education Information Required"),
      skills: Yup.string()
      .required("Skills Information Required"),
  }),
  //======END VALIDATION SCHEMA==========
  
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    console.log("Submit function running");
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
})(GeneralRegistration);

export default FormikLoginForm;