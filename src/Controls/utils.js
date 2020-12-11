function scroll(){
  setTimeout(() => {
    const chatEl = document.getElementsByClassName('chat-body')[0]
    chatEl.scrollTop = chatEl.scrollHeight
  })
}

function getTime(timestamp) {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

export {
  scroll,
  getTime,
}
