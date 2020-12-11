import React from 'react';

import MessagesContainer from './MessagesContainer'
import './style.css';

export default function ControlsView({ onSubmit, value, handleValueChange, typingUsers }){
  return (
    <div className="wrap">
      <div className="chat-body">
        <MessagesContainer />
        {typingUsers && <div className="typing">{typingUsers + ' typing...'}</div>}
      </div>
      <form className="controls" onSubmit={onSubmit}>
        <input
          placeholder="Say something"
          value={value}
          onChange={handleValueChange}
        />
        <button>Send</button>
      </form>
    </div>
  )
}
