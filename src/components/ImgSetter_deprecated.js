import React from 'react';

import Question from './Question';

import '../css/Input.css';
import '../css/Hidden.css';

const ImgSetter = ({ uploadImg, handleImgLoad, value, question }) => {
    return (
        <div>
            <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">Or</div>
                <div className="middle aligned row">
                    <div className="column" >
                    <div style={{ margin: '20px', }} >
                        <div className="ui icon header">
                            <i className="file image outline icon"></i>
                        </div>
                        <label style={{display:'flex', justifyContent: 'center', }}>
                            <div className="ui left labeled icon violet button">
                                <i className="upload icon"></i>
                                <input className='hidden' type='file' accept="image/*"
                                onChange={uploadImg} id='imgInput'/> 
                                Upload
                            </div>
                        </label>
                    </div>
                    </div>
                    <div className="column" >
                        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', margin: '20px', }} >
                            <div className="ui icon header" style={{marginBottom:'-10px'}}>
                                <i className="globe icon"></i>
                            </div>
                            <div className='ui small input' style={{display: 'flex', width:'100%'}}>
                                <input type="text" id='inputImgUrl' value={value}
                                onChange={(e) => handleImgLoad(e.target.value) }
                                placeholder="Input image URL" />   
                            </div>
                        </div>
                    </div>
                  </div>
             </div> 
         </div>
    )
}

export default ImgSetter;