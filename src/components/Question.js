import React from 'react';
import '../css/Question.css';
const Question = ({question}) =>{
    return (
        <div>
            <h1 className='h1Teg'> {question} </h1>
        </div>
    )
}

export default Question;