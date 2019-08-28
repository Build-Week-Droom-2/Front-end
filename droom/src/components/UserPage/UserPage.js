import React, {useState, useEffect} from 'react';
// import { axios } from 'axios';
import axios from 'axios';
import CardMaker from './UserCard.js';
import {Link} from 'react-router-dom';

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null
        };
    }

    // componentDidMount() {
    //     this.fetchPerson(this.props.match.params.id);
    // }

    // componentWillReceiveProps(newProps) {
    //     if(this.props.match.params.id !== newProps.match.params.id) {
    //         this.fetchMovie(newProps.match.params.id);
    //     }
    // }

    // fetchPerson = id => {
    //     axios.get('userprofile')
    //     .then(res => this.setState({person: res.data}))
    //     .catch(err => console.log(err.response));
    // }
    render() {
        console.log('in user page',this.props.location.state);
        const {name, skills, title, experience, education} = this.props.location.state;
        // if(!this.state.person) {
        //     return <div>Loading User Profile</div>
        // }

        return(
            <div className='CardMaker'>
                <CardMaker name={name} title={title} exp={experience} edu={education} skills={skills} />
                <div className='update'>
                    {/* <button>Edit</button> */}
                </div>
            </div>
        );
    }
}

/* how this will work
display name and stuff
have button that goes to matches
have button to edit
have button to sign out 
*/