import React, {useState, useEffect} from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const EmployeeMatchCard = (props) => {
    return ( 
        <div className="userCard">
            <Image src='https://picsum.photos/200' size='small' circular className="match-user-image"/>
            <h2 className='userJob'>{props.employee.name}</h2>
            
            <label className='labels'>
                <hr />
                <p className="job-match-name">{props.employee.jobTitle}</p>
                <hr />
            </label>
            <div className="thumb-icons">
                <Popup content='Click if not interested' trigger={<Button circular icon="thumbs down" color="red" onClick={()=>props.handleNo()} />} />
                <Popup content='Click if interested' trigger={<Button circular icon="thumbs up" color="green" onClick={()=>props.handleYes()} />} />
            </div>
            <label className='labels'>
                <h3>Experience</h3>
                <p className='exp userP'>{props.employee.experience}</p>
            </label>
            <label className='labels'>
                <h3>Education</h3>
                <p className='edu userP'>{props.employee.education}</p>
            </label>
            <label className='labels'>
                <h3>Skills</h3>
                <p className='skills userP'>{props.employee.skills}</p>
            </label>
        </div>
     );
}
 
export default EmployeeMatchCard;