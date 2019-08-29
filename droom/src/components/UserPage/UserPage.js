import React, {useState, useEffect} from 'react';
// import { axios } from 'axios';
import {connect} from 'react-redux'
import axios from 'axios';
import CardMaker from './UserCard.js';
import {getData} from "../../Actions/index.js"
import {Link} from 'react-router-dom';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("up top" + this.props)
        this.state = {
            person: null
        };
    }

    componentDidMount() {
        console.log('component did mount');
        this.props.getData()
    }

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
        // console.log('in user page',this.props.location.state);
        // const {name, skills, title, experience, education} = this.props.location.state;
        // if(!this.state.person) {
        //     return <div>Loading User Profile</div>
        // }
        console.log(this.props.data)
        return(
            <>
             {this.props.data && this.props.data.map(person => person.email === "droom@yahoo.com" && 
            <div className='CardMaker'>
                <CardMaker name={person.name} title={person.title} exp={person.exp} edu={person.edu} skills={person.skills} />
                <div className='update'>
                    {/* <button>Edit</button> */}
                </div>
            </div>)}
            </>
        );
    }
}
const mapStateToProps = state => {
    console.log('state',state)
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {getData})(UserPage)
/* how this will work
display name and stuff
have button that goes to matches
have button to edit
have button to sign out 
*/