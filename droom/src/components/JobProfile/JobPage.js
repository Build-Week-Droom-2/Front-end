import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardMaker from './JobCard.js';

function JobPage(){
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
export default JobPage;
/* comment*/