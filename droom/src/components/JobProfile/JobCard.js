import React, {useEffect, useState} from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function CardMaker(props){

const editJob = () => {
    return props.history.push('/edit-recruiter');
}
const jobListings = () => {
    return props.history.push('/job-listings');
}


const employeesLocal = window.localStorage.getItem("employees");
const employeesParse = JSON.parse(employeesLocal);
const matchedEmployees = employeesParse.filter(emp=>{
  if(emp["match"]=="False"){
    return false;
  }
  return true;
})

    return(
        <div className='userCard'>
            
            <div className="user-icons">
                <Link to='/matches'>
                <div className="match-icon">
                    <Popup content='View your matches' trigger={<Button circular icon="star" />} />
                </div>
                </Link>
                <Link to='/job-listings'>
                <Popup content='Job Listings' trigger={<Button circular icon="briefcase" />} />
                </Link>
                <Link to='/edit-recruiter'>
                <Popup content='Edit your profile' trigger={<Button circular icon="edit" />} />
                </Link>
                <Link to='/employee-match'>
                <Popup content='Search for employees' trigger={<Button circular icon="search plus" />} />
                </Link>
            </div>

            <div className='match-number'>
                <Link to='matches'>
                <Popup content='View your matches' trigger={<Label as='a' circular color="pink">{matchedEmployees.length}</Label>} />
                </Link>
            </div>

            <h1 className='userName'>{props.name}</h1>
            <Image src='https://picsum.photos/200' size='small' circular className="user-image"/>
            <p>Talent Recruiter</p>
            <h2 className='userJob'>{props.title}</h2>
            
        </div>
    );
}

export default CardMaker;

