import React, {useState, useEffect} from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import {Field, withFormik} from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompanyRegistration = ({errors,touched,values,status, handleSubmit, history, location}) => {
    // console.log(history.location);
    // console.log(props);
    const id = location.state.thisID;
    // console.log(values);
  const [user,setUser] = useState();

  const jobsLocal = window.localStorage.getItem("jobs");
  const jobsParse = JSON.parse(jobsLocal);
  
  let indexValue;
  let object

  
  jobsParse.forEach((item,index)=>{
      if(item.id==id){
        object = item;
        indexValue = index;
      }
  })

  let {name, place, experience, skills, workplacevalues, education} = object;
// console.log(place);
useEffect(()=>{
// console.log('now')
values.name=name;
  values.place=place;
  values.experience=experience;
  values.education = education;
  values.skills=skills;
  values.workplacevalues=workplacevalues;
},[])

  


  useEffect(() => {
      if (status) {
        //   status.id = id;
        setUser(status);
      }
    }, [status]);

    if (user) {
      jobsParse[indexValue] = (user)
      jobsParse[indexValue]['id'] = id
      window.localStorage.setItem('jobs', JSON.stringify(jobsParse));
      history.push('/job-listings');
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
          <h1>Edit Job Posting</h1>
          
        </div>

        <Form className="form-component">

        {touched.name && errors.name && <p>{errors.name}</p>}
          <label>Title
            <Field type="text" name="name" placeholder={name} />
          </label>

          {/* {touched.location && errors.location && <p>{errors.location}</p>}
          <label>location
            <Field type="text" name="location" placeholder="location" />
          </label> */}

          {touched.place && errors.place && <p>{errors.place}</p>}
          <label>Location
            <Field type="text" name="place" placeholder={place} />
          </label>

          {touched.experience && errors.experience && <p>{errors.experience}</p>}
          <label>Experience Desired
            <Field name="experience" component="textarea" placeholder={experience} />
          </label>

          {touched.education && errors.education && <p>{errors.education}</p>}
          <label>Education Desired
            <Field name="education" component="textarea" placeholder={education} />
          </label>

          {touched.skills && errors.skills && <p>{errors.skills}</p>}
          <label>Skills Desired
            <Field name="skills" component="textarea" placeholder={skills} />
          </label>

          {touched.workplacevalues && errors.workplacevalues && <p>{errors.workplacevalues}</p>}
          <label>Workplace Values
            <Field name="workplacevalues" component="textarea" placeholder={workplacevalues} />
          </label>

          <Button type='submit' color="blue" onClick={handleSubmit}>Save Changes</Button>
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
//         let date = new Date();
// let components = [
//     date.getYear(),
//     date.getMonth(),
//     date.getDate(),
//     date.getHours(),
//     date.getMinutes(),
//     date.getSeconds(),
//     date.getMilliseconds()
// ];

// let uniqueID = components.join("");
        const {workplacevalues,place,name,experience,education,skills} = res.data
        setSubmitting(false);
        setStatus({ name: name, place: place, workplacevalues:workplacevalues, experience:experience, education:education,skills:skills });
        resetForm();
      });
  }
})(CompanyRegistration);
  
export default FormikLoginForm;



// import React, {useState, useEffect} from 'react'; 
// import axios from 'axios';

// const JobUpdateForm = (props) => {
//     const [person, setPerson] = useState(null);

//     const fetchPerson = id => {
//         axios.get('from userprofile')
//         .then(res => setPerson(res.data))
//         .catch(err => console.log(err.response));
//     }

//     useEffect(() => {
//         fetchPerson(props.match.params.id);
//     }, [props.match.params.id]);

//     const handleChange = e => setPerson({...person, [e.target.name]:e.target.value});

//     const handleSubmit = event => {
//         event.preventDefault();
//         axios.put('', person)
//         .then(res => {
//             console.log(res);
//             props.history.push(`back to user profile`);
//         })
//         .catch(err => console.log(err.response));
//     };

//     if(!person) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type='text' name='name' placeholder='name' value={person.name} onChange={handleChange} />
//             <input type='text' name='title' placeholder='title' value={person.title} onChange={handleChange} />
//             <input type='text' name='exp' placeholder='exp' value={person.exp} onChange={handleChange} />
//             <input type='text' name='edu' placeholder='edu' value={person.edu} onChange={handleChange} />
//             <input type='text' name='skills' placeholder='skills' value={person.skills} onChange={handleChange} />
//             <button type='submit'>Update Profile</button>
//         </form>
//     );
// };

// export default JobUpdateForm;