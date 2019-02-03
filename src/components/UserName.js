import React from 'react';
import '../css/Hidden.css';


const UserName = ({ user = '' }) => {
    return (
        <h2 className='ui header' style={{ display: 'flex' }}>
            <div className='content' style={{ color: 'white', marginRight: '10px' }}> {user} </div>
            <i aria-hidden='true' className='user circle inverted icon' />
        </h2>
    )
}

export default UserName;