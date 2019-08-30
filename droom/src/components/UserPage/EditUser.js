import React, {useState, useEffect} from 'react';
import { Button, Form, Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux'
import {editData} from "../../Actions"

const UserRegistration = ({person, setEditing, editData} ) => {
  const [user,setUser] = useState({});
  useEffect(()=>{
    setUser(person)
  },[])

  console.log(user)
  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
    const handleSubmit = e => {
      e.preventDefault()
      editData(user.id, user)
      setEditing(false)
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


export default connect(null, {editData})(UserRegistration);