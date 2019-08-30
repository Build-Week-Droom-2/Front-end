import React from 'react';
// import { axios } from 'axios';
import {connect} from 'react-redux'
import axios from 'axios';
import CardMaker from './UserCard.js';
import {getData,getUpdate} from "../../Actions/index.js"
import {Link} from 'react-router-dom';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("up top" + this.props)
        this.state = {
            person: []
        };
        console.log('state in UP',this.state.person)
    }
    

    componentDidMount() {
        console.log('component did mount');
    return this.props.getData()
     
    }
    
    
    componentDidUpdate (prevProps) {
        console.log('prev',prevProps.data[0])
        if(prevProps.data[0] === this.props.data[0]){

            this.props.getUpdate()
        }
    }
    //stateData = () => {this.setState(this.props.data)}
    
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
            <div className='CardMaker' id = {person.id}>
                <CardMaker id = {person.id}  name={person.name} title={person.title} exp={person.exp} edu={person.edu} skills={person.skills} />
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
        data: state.data,
        //updateData: state.updateData
    }
}

export default connect(mapStateToProps, {getData,getUpdate})(UserPage)
/* how this will work
display name and stuff
have button that goes to matches
have button to edit
have button to sign out 
*/