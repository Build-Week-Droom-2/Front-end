import React,{useState, useEffect} from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { getData } from "../../Actions/"
import UserRegistration from "./EditUser.js"
import {Link} from 'react-router-dom'
import Loader from "react-loader-spinner";


function CardMaker(props){
    console.log('this is running',props)
    //const [propsInfo, setPropsInfo]= useState();
    //setPropsInfo(props)
    const [editing, setEditing] = useState(false)
    const [editedInfo, setEditedInfo] = useState();
    //const [info, setInfo] = useState();

// useEffect(() => {
  
// }, [])

    const editUser = e => {
        e.preventDefault()
        setEditing(true)

    }
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setEditing(false)
    // }

    // const handleChange = () => {
        
    // }
    if(!editing){
        return(
            <div className='userCard'>
                
                <div className="user-icons">
                    <div className="match-icon">
                        <Link to="/protected/user-matches"><Popup content='View your matches' trigger={<Button circular icon="star" />} /></Link>
                    </div>
    
                    <Popup content='Edit your profile' trigger={<Button circular icon="edit" onClick={editUser}/>} />
                    <Popup content='Search for jobs' trigger={<Button circular icon="search plus" />} />
                    {/* Issues: Bottom part of circular button doesn't register as button when hovering */}
                </div>

                <div className='match-number'>
                    <Popup content='View your matches' trigger={<Label as='a' circular color="pink">11</Label>} />
                    {/* Toss in props to this number. Props = matches.length */}
                </div>
               
                {props.isFetching ? (
                        <Loader
                        type="BallTriangle"
                        color="#22ba45"
                        height={100}
                        width={100}
                        />
                    ) : (
                <>
                    <h1 className='userName'>{props.name}</h1>
                    <Image src='https://picsum.photos/200' size='small' circular className="user-image"/>
                    <h2 className='userJob'>{props.title}</h2>
                    
                    <label className='labels'>
                        <h3>Experience</h3>
                    <p className='exp userP'>{props.exp}</p>
                    </label>
                    <label className='labels'>
                        <h3>Education</h3>
                    <p className='edu userP'>{props.edu}</p>
                    </label>
                    <label className='labels'>
                        <h3>Skills</h3>
                    <div className='skills userP'>{props.skills.map(skill =><div> <p key={skill}>{skill}</p></div>)}</div>
                    </label>
                </>
                )}
            </div> 
        );
         
    } else {
        return <UserRegistration person={props} setEditing={setEditing}/>        
    } 
  
   
}
const mapStateToProps = state => {
    return {
        isFetching: state.isFetching
    }
}
export default connect(mapStateToProps, {getData})(CardMaker);
