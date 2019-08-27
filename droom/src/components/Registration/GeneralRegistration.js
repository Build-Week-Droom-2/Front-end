import React, {useState, useEffect} from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
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
    <div className="general-registration">
        <Button animated color="green">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>

        <div className="general-registration-top">
          <h1>The wait is over</h1>
          <p>Discover your dream job today</p>
        </div>

        <Form className="form-component">

          {touched.name && errors.name && <p>{errors.name}</p>}
          <label>Full Name
            <Field component="input" type="text" name="name" placeholder="Name" />
          </label>

          {touched.email && errors.email && <p>{errors.email}</p>}
          <label>Email
            <Field type="text" name="email" placeholder="Email" />
          </label>

          {touched.password && errors.password && <p>{errors.password}</p>}
          <label>Password
            <Field type="password" name="password" placeholder="Password" />
          </label>

          {touched.confirm && errors.confirm && <p>{errors.confirm}</p>}
          <label>Confirm Password
            <Field name="confirm" type="password" placeholder="Confirm Password" />
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
      email: email || "",
      password: password || "",
      confirm: confirm || ""
    };
  },
  
  //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
    name: Yup.string()
        .required("Name Required"),
    email: Yup.string()
        .email()
        .required("Email Required"),
    password: Yup.string()
        .min(8, 'Password needs to be 8 characters minimum')
        .required("Password Required"),
    confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("You must confirm your password")
  }),
  //======END VALIDATION SCHEMA==========
  
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    console.log("Submit function running");
    //Check if email exists
    //axios post here
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        const {name,email,password,confirm} = res.data
        setSubmitting(false);
        setStatus({ name: name, email: email, password:password, confirm:confirm });
        resetForm();
      });
  }
})(GeneralRegistration);

export default FormikLoginForm;