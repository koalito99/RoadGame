import React from 'react';

import '../css/Input.css';
import '../css/Hidden.css';

const ToggleFields = () => {

  const clickGoogle = () => {
    toggle('btnG', 'inputG', 'btnC',  'inputC');
  }

  const clickCustom = () => {
    toggle('btnC',  'inputC', 'btnG', 'inputG');
  }

  const toggle = (activeBtn, fieldToShow, greyBtn, fieldToHide, ) => {
    document.getElementById(activeBtn).className = 'ui button violet';
    document.getElementById(greyBtn).className = 'ui button active';
    document.getElementById(fieldToShow).style.display = 'block';
    document.getElementById(fieldToHide).style.display = 'none';
  }

  return (
    <div >
      <div class="ui buttons" style={{ display: 'flex', justifyContent: 'center', 
        marginLeft: '60px', marginRight: '60px'}}>
        <div class="ui button violet" id='btnG' onClick={clickGoogle} >Google</div >
        <div class="or"></div>
        <div  class="ui button active" id='btnC' onClick={clickCustom} >Custom</div >
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '15px 30px'}} >
        <div className='ui small input' >
          <input type="text" id='inputG' 
          // value={} onChange={ }
          placeholder="Google Autocomplete" />   
        </div>
        <div className='ui small input' >
          <input type="text" id='inputC' style={{display: 'none'}}
          // value={} onChange={ }
          placeholder="Custom Autocomplete" />   
        </div>
      </div>
    </div>
  )

}

export default ToggleFields;
