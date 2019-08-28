import React from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';

function CardMaker(props){
    console.log('props in usercard',props)
    return(
        <div className='userCard'>
            
            <div className="user-icons">
                <div className="match-icon">
                    <Popup content='View your matches' trigger={<Button circular icon="star" />} />
                </div>

                <Popup content='Edit your profile' trigger={<Button circular icon="edit" />} />
                <Popup content='Search for jobs' trigger={<Button circular icon="search plus" />} />
                {/* Issues: Bottom part of circular button doesn't register as button when hovering */}
            </div>

            <div className='match-number'>
                <Popup content='View your matches' trigger={<Label as='a' circular color="pink">11</Label>} />
                {/* Toss in props to this number. Props = matches.length */}
            </div>

            <h1 className='userName'>{props.name}</h1>
            <Image src='https://picsum.photos/200' size='small' circular className="user-image"/>
            <h2 className='userJob'>{props.title}</h2>
            
            <label className='labels'>
                <h3>Experience</h3>
            <p className='exp userP'>{props.exp}</p>
            </label>
            <label className='labels'>
                <h3>Education</h3>
            <p className='edu userP'>{props.edu}</p>
            </label>
            <label className='labels'>
                <h3>Skills</h3>
            <p className='skills userP'>{props.skills}</p>
            </label>
        </div>
    );
}

export default CardMaker;
