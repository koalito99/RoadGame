import React from 'react';

const Image = ({img, removeImg}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '5px',
        }}>
            <img className="ui medium rounded image" src={img} alt='' />
            <div className="ui left labeled icon violet basic button"
                onClick={ removeImg }
                style={{ marginTop: "20px" }}> Remove
                <i className="trash alternate icon"></i>
            </div>
        </div>
    )
}

export default Image;