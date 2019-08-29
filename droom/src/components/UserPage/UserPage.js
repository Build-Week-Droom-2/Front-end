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

    render() {
        // console.log('in user page',this.props.location.state);
        const {name, skills, title, experience, education} = this.props.location.state;

        return(
            <div className='CardMaker'>
                {/* hello */}
                <CardMaker name={name} title={title} exp={experience} edu={education} skills={skills} />
                <div className='update'>
                </div>
            </div>
        );
    }
}
