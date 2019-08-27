import React, {useState, useEffect} from 'react';
// import { axios } from 'axios';
import axios from 'axios';
import CardMaker from './UserCard.js';

function UserPage(){
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('')
        .then(res => {
            setData(res.data);
        });
    }, []);
        return(
            <div className='CardMaker'>
                <CardMaker name={data.name} url={data.url} title={data.title} exp={data.exp} edu={data.edu} skills={data.skills} />
            </div>
        )
}

export default UserPage
/* how this will work
display name and stuff
have button that goes to matches
have button to edit
have button to sign out 
*/