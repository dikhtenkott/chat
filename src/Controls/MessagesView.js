import React from 'react'
import { getTime } from './utils'

export default function MessagesView({ messages }) {
  return (
    messages.map(item => {
      const isMe = item.user === 'Me'
      return (
        <div key={item.id} className={`message ${isMe ? 'self' : ''} ${!item.isSameUser ? 'with-arrow' : ''}`}>
          <div className="body">
          {!isMe && !item.isSameUser && <div><b>{item.user}</b></div>}
          {item.content} {getTime(item.timestamp)}
          </div>
        </div>
      )
    })
  )
}
