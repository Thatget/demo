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
      socket.emit('check',{text: true}
      )
    }
  }

  return (
    <div style={{position: 'absolute', bottom: '0 '}}>
      <input
        type="text"
        value={message}
        onChange={(e) => changeText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e.key)} />
    </div>
  )
}

export default ChatInput