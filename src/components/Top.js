import React from 'react';
import UserName from './UserName';
import DropdownMenu from './DropdownMenu.js';
import '../css/Top.css';

const Top = (props) => {
  return (
    <div className="App" id='top'>
      <header className="App-header">
        <h1 className="App-title"> Roadio ממשק שאלות ותוכן </h1>
        <div className={props.user === '' ? 'hidden' : ''}
          style={{ display: 'flex', justifyContent: 'space-between', marginRight: '-10px' }}>
            <DropdownMenu itemId={props.itemId} setNew={props.setNew} />
            <UserName user={props.user} />
        </div>
      </header>
      <div className="App-content">
        {props.children}
      </div>
    </div>
  )
}

export default Top;