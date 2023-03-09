import { SetStateAction, useState } from "react"
import { Socket } from 'socket.io-client';

interface Props {
  socket: Socket;
}

const ChatInput: React.FC<Props> = ({socket}) => {
  const [message, setMessage] = useState('')

  const changeText = (text: SetStateAction<string>) => {
    setMessage(text)
  }

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') {
      socket.emit('check',{text: true})
      setMessage('')
    }
  }

  return (
    <div style={{height: '30px'}}>
      <div className="w-full">
        <input
          type="text"
          className="border-solid border-2 border-indigo-600 rounded-full"
          value={message}
          onChange={(e) => changeText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e.key)} />
        </div>
    </div>
  )
}

export default ChatInput