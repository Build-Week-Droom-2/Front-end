import React, {useState, useEffect} from 'react';
import { Button, Form, Image, Icon } from 'semantic-ui-react';
import {Field, withFormik} from 'formik';
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import axios from 'axios';

const RecruiterEdit = ({errors,touched,values,status, handleSubmit, history}) => {
    
  const [user,setUser] = useState();

  const recruiter = window.localStorage.getItem("recruiter");
        const recParse = JSON.parse(recruiter);
        const name = recParse.name;
        const company = recParse.company;
  
  useEffect(() => {
      if (status) {
        setUser(status);
      }
    }, [status]);

    useEffect(()=>{
      values.name = name;
      values.company = company;
    },[])

  if (user) {
    window.localStorage.setItem('recruiter', JSON.stringify(user));
    user.history.push('/recruiter-page');
  }

  return(
    <div className="recruiter-registration">
        <Link to='/recruiter-page'>
          <Button animated color="green">
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow left' />
            </Button.Content>
          </Button>
        </Link>
        <div className="recruiter-registration-top">
          <h1>Edit Profile</h1>

          <Image src='https://picsum.photos/200' size='small' circular className="user-registration-avatar"/>
        </div>

        <Form className="form-component">

          {touched.name && errors.name && <p>{errors.name}</p>}
          <label>Name
            <Field component="input" type="text" name="name" placeholder={name} />
          </label>

          {touched.company && errors.company && <p>{errors.company}</p>}
          <label>Company
            <Field type="text" name="company"  placeholder={company}/>
          </label>

          <Button type='submit' color="blue" onClick={handleSubmit}>Submit</Button>
        </Form>
    </div>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, company }) {
    return {
      name: name || "",
      company: company || ""
    };
  },
  
  //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name Required"),
    company: Yup.string()
      .required("Company Required")
  }),
  //======END VALIDATION SCHEMA==========
  
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus, props }) {
    const {history} = props;
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        const {name,zip,company} = res.data
        setSubmitting(false);
        setStatus({ name: name, company:company, history:history });
        resetForm();
      }, {...props});
  }
})(RecruiterEdit);

const RouterFormik = withRouter(FormikLoginForm)

export default FormikLoginForm;