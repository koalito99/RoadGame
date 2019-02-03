import React from 'react';
import '../css/RadioBtn.css';

const RadioBtn = ({value, question, onChange, answer}) => {

    return (
        <label className="container" style={{fontSize: '18px'}}>
            <input type="radio" 
            name={question}
            value={value}
            onClick={onChange} 
            onChange={onChange}
            checked={String(answer) === String(value)}
            />
            <span className="checkmark"></span>
        </label>
    )
}

export default RadioBtn;