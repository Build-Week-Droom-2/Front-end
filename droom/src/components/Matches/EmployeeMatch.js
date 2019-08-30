import React, {useState, useEffect} from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EmployeeMatchCard from './EmployeeMatchCard';

function EmployeeMatch(props){
    const employees = window.localStorage.getItem("employees");
        const empParse = JSON.parse(employees);
        let employee;
        let indexValue;

        empParse.forEach((item,index)=>{

                if(item.viewed=="False"){
                    employee=item;
                    indexValue=index;
                }
        });
        const employeesLocal = window.localStorage.getItem("employees");
        const employeesParse = JSON.parse(employeesLocal);
        const matchedEmployees = employeesParse.filter(emp=>{
          if(emp["match"]=="False"){
            return false;
          }
          return true;
        })
        const handleYes = () =>{
            employee["viewed"] = "True";
            employee["match"] = "True"
            empParse[indexValue] = employee;
            window.localStorage.setItem('employees', JSON.stringify(empParse));
            props.history.push('/employee-match');
        }
        const handleNo = () =>{
            employee["viewed"] = "True";
            empParse[indexValue] = employee;
            window.localStorage.setItem('employees', JSON.stringify(empParse));
            props.history.push('/employee-match');
        }

    return(
        <div className='userCard'>
           
            <div className="user-icons">
                <Link to='/matches'>
                <div className="match-icon">
                    <Popup content='View your matches' trigger={<Button circular icon="star" />} />
                </div>
                </Link>
                <Link to='/recruiter-page'>
                <Popup content='Back to your profile' trigger={<Button circular icon="home" />} />
                </Link>
                <Popup content='Check your Howmessages' trigger={<Button circular icon="mail" />} />
            </div>
            <div className='match-number'>
                <Link to='/matches'>
                <Popup content='View your matches' trigger={<Label as='a' circular color="pink">{matchedEmployees.length}</Label>} />
                </Link>
            </div>
            {(employee) ? <EmployeeMatchCard handleNo={handleNo} handleYes={handleYes} employee={employee} /> : null}
            {/* <Image src='https://picsum.photos/200' size='small' circular className="match-user-image"/>
            <h2 className='userJob'>{employee.name}</h2>
            
            <label className='labels'>
                <hr />
                <p className="job-match-name">{employee.jobTitle}</p>
                <hr />
            </label>
            <div className="thumb-icons">
                <Popup content='Click if not interested' trigger={<Button circular icon="thumbs down" color="red" onClick={()=>handleNo()} />} />
                <Popup content='Click if interested' trigger={<Button circular icon="thumbs up" color="green" onClick={()=>handleYes()} />} />
            </div>
            <label className='labels'>
                <h3>Experience</h3>
                <p className='exp userP'>{employee.experience}</p>
            </label>
            <label className='labels'>
                <h3>Education</h3>
                <p className='edu userP'>{employee.education}</p>
            </label>
            <label className='labels'>
                <h3>Skills</h3>
                <p className='skills userP'>{employee.skills}</p>
            </label> */}
        </div>
    );
}

export default EmployeeMatch;
