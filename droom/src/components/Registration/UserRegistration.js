import React, {useState, useEffect} from 'react';
import { Button, Form, Image, Icon } from 'semantic-ui-react';
import {Field, withFormik} from 'formik';
import {connect} from 'react-redux'
import {getUpdate, getData} from "../../Actions/actions.js"
import {withRouter} from "react-router-dom";
import * as Yup from "yup";
import { bindActionCreators } from 'redux';

const UserRegistration = ({errors,touched,values,status, handleSubmit}, props) => {
  const [user,setUser] = useState();
  console.log('here', props.data)

  useEffect(() => {
      if (status) {
        setUser(status);
      }
    }, [status]);

      return(
        <div className="user-registration">
            <Button animated color="green">
              <Button.Content visible>Back</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
    
            <div className="user-registration-top">
              <h1>So you're looking for a job?</h1>
              <p>You've come to the right place</p>
              <p>Let's get started on filling out your bio...</p>
              <Image src='https://picsum.photos/200' size='small' circular className="user-registration-avatar"/>
            </div>
    
            <Form className="form-component">
    
              {touched.zip && errors.zip && <p>{errors.zip}</p>}
              <label>Zip Code
                <Field type="text" name="zip" placeholder="Zip Code" />
              </label>
    
              {touched.title && errors.title && <p>{errors.title}</p>}
              <label>Title
                <Field type="text" name="title" placeholder="Title" />
              </label>
    
              {touched.experience && errors.experience && <p>{errors.experience}</p>}
              <label>Experience
                <Field name="experience" component="textarea" placeholder="Experience" />
              </label>
    
              {touched.education && errors.education && <p>{errors.education}</p>}
              <label>Education
                <Field name="education" component="textarea" placeholder="Education" />
              </label>
    
              {touched.skills && errors.skills && <p>{errors.skills}</p>}
              <label>Skills
                <Field name="skills" component="textarea" placeholder="Skills" />
              </label>
              <Button type='submit' color="blue" onClick={handleSubmit}>Share with employers</Button>
            </Form>
        </div>
      )
    } 



const FormikLoginForm = withFormik({
  mapPropsToValues({ name, zip, title, experience, education, skills }) {
    return {
      zip: zip || "",
      title: title || "",
      experience: experience || "",
      education: education || "",
      skills: skills || ""
    };
  },
  
  //======VALIDATION SCHEMA==========
  validationSchema: Yup.object().shape({
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
  
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus, props }) {
    const {history} = props;
    history.push('/protected')
    props.getData()
    props.getUpdate(4, values)
  }
})(UserRegistration);

const mapDispatchToProps = dispatch => (bindActionCreators({
  getUpdate , getData
}, dispatch));



const RouterFormik = connect(null, mapDispatchToProps)(FormikLoginForm)
const RouterFormik2 = withRouter(RouterFormik)
export default RouterFormik2;