import React from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';

const Job = (props) => {
    const editJob = (id) =>{
        console.log("edit this job: " + id);
    }
    const deleteJob = (id) =>{
        console.log("delete this job: ", + id);
        const jobsLocal = window.localStorage.getItem("jobs");
        const jobsParse = JSON.parse(jobsLocal);
        let jobsArray = jobsParse.filter((item,index)=>{
            if(String(props.job.id)===String(item.id)){
                return false;
            } else{
                return true;
            }
        })
        window.localStorage.setItem('jobs', JSON.stringify(jobsArray));
        props.history.push('/job-listings');
    }
    return ( 
        <div className="single-job">
            <Popup content='Edit Job Posting' trigger={<Button circular icon="edit" color="blue" onClick={()=>editJob(props.job.id)}/>} />
            <p>{props.job.name}</p>
                <Popup content='Delete' trigger={<Button circular icon="delete" color="red" onClick={()=>deleteJob(props.job.id)}/>} />
        </div>
     );
}
 
export default Job;