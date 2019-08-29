import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import {connect} from 'react-redux'
import JobCard from './JobCard.js';
import {Link} from 'react-router-dom';
import jobs from '../../fakeData/jobs';

 class JobPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null
        };
    }
       
    render() {
        const recruiter = window.localStorage.getItem("recruiter");
        const recParse = JSON.parse(recruiter);
        const name = recParse.name;
        const company = recParse.company;
        const history = this.props.history;       

        return(
            <div className='CardMaker'>
                <JobCard name={name} title={company} history={history} /> 
                
                <div className='update'>
                </div>
            </div>
            
        );
    }
}

export default JobPage