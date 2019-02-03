import React from 'react';

const LightText = ({text,heading}) => {
    let updatedText = []
    const tokens = text.split(heading);
    let keys = 0;
    updatedText.push(<span key={(keys++).toString()}>{tokens[0]}</span>);
    for(let i = 1,size = tokens.length; i < size; i++){
        updatedText.push(<span key={(keys++).toString()} className="ligthText">{heading}</span>);
        updatedText.push(<span key={(keys++).toString()}>{tokens[i]}</span>);
    }
    return (
        <div>
        {/* 'ggggggggggggggggggggggggggggggggggggggggggggggggggggg' */}
        {updatedText}
        </div>
    )
    }


export default LightText;