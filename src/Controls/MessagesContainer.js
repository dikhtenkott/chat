import React, { useState, useEffect } from 'react'
import MessagesView from './MessagesView'
import { scroll } from './utils'

export default function MessagesContainer(props){
  const [messages, setMessages] = useState([])

  useEffect(() => {
    window.Chat.onMessage((message) => {
      const lastMessage = messages[messages.length - 1]
      setMessages([ ...messages, { ...message, isSameUser: (lastMessage && lastMessage.user === message.user) }])
      scroll()
    })
  }, [messages, setMessages])
  return (
    <MessagesView
      messages={messages}
    />
  )
}
