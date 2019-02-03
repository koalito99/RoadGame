import React from 'react';
import '../css/Text.css';
import LightText from './LightText';

const Text = ({text,heading}) => {
        return (text !== null) ? (
            <div id= "text"> 
                <LightText text={text} heading={heading}/>
            </div>
        ) : ( <div></div> ) 

};


export default Text;