import React, {useState, useEffect} from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const RecruiterMatchRow = (props) => {

    const [thisID, setThisID] = useState(props.emp.id)
    const editJob = (id) =>{
        console.log("edit this job: " + id);
        console.log(thisID);
        props.history.push('/job-listings', {thisID});
    }
    const deleteJob = (id) =>{
        console.log("delete this job: ", + id);
        const empLocal = window.localStorage.getItem("employees");
        const empParse = JSON.parse(empLocal);
        let empArray = empParse.filter((item,index)=>{
            if(String(props.emp.id)===String(item.id)){
                return false;
            } else{
                return true;
            }
        })
        window.localStorage.setItem('employees', JSON.stringify(empArray));
        props.history.push('/matches');
    }
    return ( 
        <div className="single-job">
            {/* <Link to={{pathname: '/job-edit', state: {thisID}}}> */}
            {/* <Link to='job-edit'> */}
            <Popup content='Message Them' trigger={<Button circular icon="envelope" color="blue"/>} />
            {/* </Link> */}
            <p>{props.emp.name}</p>
                <Popup content='Delete' trigger={<Button circular icon="delete" color="red" onClick={()=>deleteJob(props.emp.id)}/>} />
        </div>
     );
}
 
export default RecruiterMatchRow;