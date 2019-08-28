import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardMaker from './JobCard.js';
import {Link} from 'react-router-dom';

export default class JobPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null
        };
    }
    

    componentDidMount() {
        this.fetchPerson(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        if(this.props.match.params.id !== newProps.match.params.id) {
            this.fetchMovie(newProps.match.params.id);
        }  
    }

    fetchPerson = id => {
        axios.get('userprofile')
        .then(res => this.setState({person: res.data}))
        .catch(err => console.log(err.response));
    }
    render() {
        
        console.log("props", this.props);
        // // if(!this.state.pers {
        // console.log(this.state);
        //     return <div>Loading User Profile</div>
        // }

        return(
            <div className='CardMaker'>
                <CardMaker name={this.props.name} title={this.props.company}  />
                <div className='update'>
                    {/* <Link to `/update-profile/${this.state.person.id}`>Edit</Link> */}
                </div>
            </div>
        );
    }
}

/* comment
comment*/