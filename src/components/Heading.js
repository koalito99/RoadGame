import React from 'react';

const Heading = ({heading=''}) => {
    return (
        <div className="ui violet segment"
            style={{
            padding: '12px',
            margin: '20px',
            font: `1.5em 'Georgia', cursive`,
            textAlign: 'center'
            }}>  {heading}
        </div>
    )
}

export default Heading;