import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import {connect} from 'react-redux'
import CardMaker from './JobCard.js';
import {Link} from 'react-router-dom';

 class JobPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null
        };
    }
    

    // componentDidMount() {
    //     this.fetchPerson();
    // }

    // componentWillReceiveProps(newProps) {
    //     if(this.props.match.params.id !== newProps.match.params.id) {
    //         this.fetchMovie(newProps.match.params.id);
    //     }  
    // }

    // fetchPerson = id => {
    //     axiosWithAuth()
    //         .get('http://localhost:5000/api/users')
    //         .then(res => console.log(res))
    //         .catch(err => console.log("err", err.response));
    // }

       
    render() {
         const name = this.props.location.state.name;
        const company = this.props.location.state.company;
        const history = this.props.history;
       

        return(
            <div className='CardMaker'>
                <CardMaker name={name} title={company} history={history} />
                <div className='update'>
                    {/* <Link to `/update-profile/${this.state.person.id}`>Edit</Link> */}
                </div>
            </div>
            
        );
    }
}

export default JobPage
/* comment
comment*/