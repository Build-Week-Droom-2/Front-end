import React from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';

const Job = (props) => {
    return ( 
        <div className="single-job">
            
            <Popup content='Edit Job Posting' trigger={<Button circular icon="edit" color="blue"/>} />
            <p>{props.job}</p>
                <Popup content='Delete' trigger={<Button circular icon="search plus" color="red"/>} />
        </div>
     );
}
 
export default Job;