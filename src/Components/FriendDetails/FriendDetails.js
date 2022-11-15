import React from 'react';
import './FriendDetails.css'
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    console.log(friend)
    return (
        <div className='friendDetails'>
            <h1>Everything you need to know about this user</h1>
            <h4>About: {friend.name}</h4>
            <p><small>Phone: </small> {friend.phone}</p>
            <p><small>Website: </small> {friend.website}</p>
        </div>
    );
};

export default FriendDetails;