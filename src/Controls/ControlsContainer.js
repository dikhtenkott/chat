import React, { useState, useCallback, useEffect, useMemo } from 'react'
import ControlsView from './ControlsView'
import { scroll } from './utils'

export default function ControlsContainer() {
  const [value, setValue] = useState('')
  const [typing, setTyping] = useState([])
  const handleValueChange = useCallback((e) => setValue(e.target.value), [setValue])

  const typingUsers = useMemo(() => {
    if(!typing.length) {
      return
    }
    return typing.map(item => item.user).join(', ')
  }, [typing])

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    if(!value) return
    window.Chat.sendMessage(value)
    setValue('')
    scroll()
  }, [value])

  useEffect(() => {
    window.Chat.onTyping((user) => {
      if (user === 'Me') {
        return
      }
      const id = Date.now()
      const timeout = setTimeout(() => { setTyping(typing.filter(user => user.id !== id)) }, 8000)
      setTyping([...typing.filter(item => item.user !== user), { user, id, timeout }])
    })
    return () => typing.forEach(item => clearTimeout(item.timeout))
  }, [typing, setTyping])

  return (
    <ControlsView
      onSubmit={onSubmit}
      value={value}
      handleValueChange={handleValueChange}
      typingUsers={typingUsers}
     />
  )
}
