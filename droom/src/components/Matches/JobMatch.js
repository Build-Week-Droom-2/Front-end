import React from 'react';
import { Image, Icon, Button, Popup, Label } from 'semantic-ui-react';

function JobMatch(props){
    

    // useEffect(() => {
    //     axios
    //         .get("../usersData.json")
    //         .then(response => {
    //             setUserInfo(response.data.dataOne)
    //         })
    //         .catch(error => {
    //             console.log("Error getting data", error)
    //         })
    // }, [])


    return(
        <div className='userCard'>
            
            <div className="user-icons">
                <div className="match-icon">
                    <Popup content='View your matches' trigger={<Button circular icon="star" />} />
                </div>

                <Popup content='Back to your profile' trigger={<Button circular icon="home" />} />
                <Popup content='Check your messages' trigger={<Button circular icon="mail" />} />
                {/* Issues: Bottom part of circular button doesn't register as button when hovering */}
            </div>

            <div className='match-number'>
                <Popup content='View your matches' trigger={<Label as='a' circular color="pink">11</Label>} />
                {/* Toss in props to this number. Props = matches.length */}
            </div>

            <Image src='https://picsum.photos/200' size='small' circular className="match-user-image"/>
            <h2 className='userJob'>Awesome Job Title</h2>
            
            <label className='labels'>
                <hr />
                <p className="job-match-name">Company Name</p>
                <p className="job-match-location">Location</p>
            <hr />
            </label>
            <div className="thumb-icons">
                <Popup content='Click if not interested' trigger={<Button circular icon="thumbs down" color="red"/>} />
                <Popup content='Click if interested' trigger={<Button circular icon="thumbs up" color="green"/>} />
            </div>
            <label className='labels'>
                <h3>Experience Desired</h3>
                <p className='exp userP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis ipsa, quis illo nihil aperiam, veritatis fuga quia perspiciatis maxime suscipit molestiae molestias at iste dolor facere, accusantium cumque amet.</p>
            </label>
            <label className='labels'>
                <h3>Education Desired</h3>
                <p className='edu userP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis ipsa, quis illo nihil aperiam, veritatis fuga quia perspiciatis maxime suscipit molestiae molestias at iste dolor facere, accusantium cumque amet.</p>
            </label>
            <label className='labels'>
                <h3>Skills Desired</h3>
                <p className='skills userP'> ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis ipsa, quis illo nihil aperiam, veritatis fuga quia perspiciatis maxime suscipit molestiae molestias at iste dolor facere, accusantium cumque amet.</p>
            </label>

            <label className='labels'>
                <h3>Workplace Values</h3>
                <p className='values userP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis ipsa, quis illo nihil aperiam, veritatis fuga quia perspiciatis maxime suscipit molestiae molestias at iste dolor facere, accusantium cumque amet.</p>
            </label>
        </div>
    );
}

export default JobMatch;
