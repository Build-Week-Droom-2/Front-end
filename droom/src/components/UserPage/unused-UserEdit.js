import React, {useState, useEffect} from 'react'; 
import {connect}

const UserUpdateForm = (props) => {
    const [person, setPerson] = useState(null);

    // const fetchPerson = id => {
    //     axios.get('from userprofile')
    //     .then(res => setPerson(res.data))
    //     .catch(err => console.log(err.response));
    // }

    // useEffect(() => {
    //     fetchPerson(props.match.params.id);
    // }, [props.match.params.id]);

    const handleChange = e => setPerson({...person, [e.target.name]:e.target.value});

    const handleSubmit = event => {
        event.preventDefault();
        axios.put('', person)
        .then(res => {
            console.log(res);
            props.history.push(`back to user profile`);
        })
        .catch(err => console.log(err.response));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='name' value={props.name} onChange={handleChange} />
            <input type='text' name='title' placeholder='title' value={props.title} onChange={handleChange} />
            <input type='text' name='exp' placeholder='exp' value={props.exp} onChange={handleChange} />
            <input type='text' name='edu' placeholder='edu' value={props.edu} onChange={handleChange} />
            <input type='text' name='skills' placeholder='skills' value={props.skills} onChange={handleChange} />
            <button type='submit'>Update Profile</button>
        </form>
    );
};

export default UserUpdateForm;