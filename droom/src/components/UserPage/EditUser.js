import React, {useState, useEffect} from 'react';
import { Button, Form, Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux'
import {editData} from "../../Actions"
//import Userpage from '../UserPage/UserPage'

const UserRegistration = ({person, setEditing, editData} ) => {
  const [user,setUser] = useState({});
  console.log('user in formik',user)
  console.log('setEditing',setEditing)
 
  // useEffect((props) => {
  //       setUser(props)
  //   }, [props]);
    
  //   console.log(user)


    // useEffect(() => {
    //   if (status) {
    //     setEditing(status);
    //   }
    // }, [status]);

  //   if (user) {
  //     return user.history.push('/user-page', {name: user.name, url:user.zip, title:user.title, experience:user.experience, education:user.education,skills:user.skills});
  //   }
    
  //  user && user.map(user => user.history.push('/user-page'), {name: user.name})
  useEffect(()=>{
    setUser(person)
  },[])

  console.log(user)
  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
    const handleSubmit = e => {
      e.preventDefault()
      editData(1, user)
      setEditing(false)
      console.log('hi')
    } 
      return(
          <div className="user-registration">
              <Button animated color="green" onClick={()=>setEditing(false)} >
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow left' />
                </Button.Content>
              </Button>
      
              <div className="user-registration-top">
                <h1>Edit Profile</h1>
                {/* <p>You've come to the right place</p>
                <p>Let's get started on filling out your bio...</p> */}
                <Image src='https://picsum.photos/200' size='small' circular className="user-registration-avatar"/>
              </div>
      
              <Form className="form-component" onSubmit={handleSubmit}>
    
                <label>Name
                  <input component="input" type="text" name='name' value={user.name} placeholder="Name" onChange={handleChange} />
                </label>
      
              
                <label>Title
                  <input type="text" name="title" placeholder="Title" value={user.title} onChange={handleChange}/>
                </label>
      
                <label>Experience
                  <input name="experience" component="textarea" placeholder="Experience" value={user.exp} onChange={handleChange}/>
                </label>
      
                
                <label>Education
                  <input name="education" component="textarea" placeholder="Education" value={user.edu} onChange={handleChange}/>
                </label>
      
               
                <label>Skills
                  <input name="skills" component="textarea" placeholder="Skills" value={user.skills} onChange={handleChange}/>
                </label>
                <Button type='submit' color="blue" >Edit</Button>
              </Form>
          </div>
    
      )
  
}


// const FormikLoginForm = withFormik({
//   mapPropsToValues({ name, zip, title, experience, education, skills }) {
//     return {
//       name: name || "",
//       zip: zip || "",
//       title: title || "",
//       experience: experience || "",
//       education: education || "",
//       skills: skills || ""
//     };
//   },
  
//   //======VALIDATION SCHEMA==========
//   validationSchema: Yup.object().shape({
//     name: Yup.string()
//       .required("Name Required"),
//     zip: Yup.string()
//       .required("Zip Code Required"),
//     title: Yup.string()
//       .required("Job Title Required"),
//       experience: Yup.string()
//       .required("Experience Information Required"),
//       education: Yup.string()
//       .required("Education Information Required"),
//       skills: Yup.string()
//       .required("Skills Information Required"),
//   }),
//   //======END VALIDATION SCHEMA==========
  
//   handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus, props }) {
//     const {history} = props;
//     console.log("Submit function running");
//     //history.push('/user-page')
//     //Check if email exists
//     //axios post here
//     axios
//       .post("https://reqres.in/api/users", values)
//       .then(res => {
//         const {name,zip,title,experience,education,skills} = res.data
//         console.log(res)
//         setSubmitting(false);
//         setStatus({ name: name, zip: zip, title:title, experience:experience, education:education,skills:skills, history: history });
//         resetForm();
//       }, {...props});
//   }
// })(UserRegistration);

// const RouterFormik = withRouter(FormikLoginForm)

export default connect(null, {editData})(UserRegistration);