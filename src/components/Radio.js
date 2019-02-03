import React from 'react';
import RadioBtn from './RadioBtn';
import Question from './Question';

const Radio = ({question, handleOptionChange, answer}) => {
    let btns = [];
    for (let i = 5; i>=1; i--){
        btns.push(
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }} key={i}>
                <h4 style={{marginLeft: '6px'}}> {i} </h4>
                <RadioBtn 
                    value={i}
                    onChange={handleOptionChange}
                    question={question}
                    answer={answer}
                />
            </div>)
    }

    return (
        <div style={{ display: 'flex',  alignItems: 'center' }}>
            <div style={{
                display:'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-around',
                width: '50%',
                marginLeft: '10%',
                marginTop: '30px',
                marginBottom: '20px',
            }}> {btns} </div>
            <Question question={question}/>
        </div>
    )
}

export default Radio;