import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css'

const Friend = ({ friend }) => {
    const { name, address, email, username, id } = friend;
    return (
        <div className='friend'>
            <h4><small>Name: </small> {name}</h4>
            <p><small>City: </small> {address.city}</p>
            <p><small>Email: </small> {email}</p>
            <p><small>About this user:</small> <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;