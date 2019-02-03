import React from 'react';
import '../css/Hidden.css';

const Message = ({color, icon, text1, text2, className}) => {
    return (
        <div className={`ui icon ${color} massive message ${className}`} >
            <div className='content' style={{ textAlign: 'right', marginRight: '30px' }}>
                <div className='header'>{text1}</div>
            {text2} </div>
            <i aria-hidden='true' className={icon} />
        </div>
    )
}

export default Message;