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
        console.log(this.props)
        this.state = {
            visible: false
        };
    }
    

    componentDidMount() {
        return this.props.getData()
    }
    
    
    componentDidUpdate (prevProps) {
        if(prevProps.data[0] === this.props.data[0]){
            this.props.getUpdate()
        }
    }
    render() 
        {
            return(
                <>
                    {this.props.data && this.props.data.map(person => {
                        console.log(this.props.data.length)
                        if(this.props.data.length !== 1 ){
                            if(person.email !== 'droom@yahoo.com'){
                                return (
                                    <div className ='CardMaker'>
                                        <CardMaker key={person.id} id = {person.id}  name={person.name} title={person.title} exp={person.exp} edu={person.edu} skills={person.skills} />
                                        <div className='update'></div>
                                    </div>
                                )
                            }
                        } else {
                            return (
                                <div className ='CardMaker'>
                                    <CardMaker key={person.id} id = {person.id}  name={person.name} title={person.title} exp={person.exp} edu={person.edu} skills={person.skills} />
                                <div className='update'></div>
                                </div>
                            )
                        }
                    })}
                </>
            )
        }
}  
 

const mapStateToProps = state => {
    console.log('state',state)
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps, {getData,getUpdate})(UserPage)



