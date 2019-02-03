import React from 'react';

import Question from './Question';

import '../css/Input.css';
import '../css/Hidden.css';

const ImgSetter = ({  handleImgLoad, value, question }) => {
    return (

        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end' }} >
            <Question question={question}/> 
            <div className='ui small input' style={{display: 'flex', width:'90%', marginRight:'30px' }}>
                <input type="text" id='inputImgUrl' value={value}
                onChange={(e) => handleImgLoad(e.target.value) }
                placeholder="Input image URL" />   
            </div>
        </div>

    )
}

export default ImgSetter;