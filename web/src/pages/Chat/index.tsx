import ChatContent from "../../components/ChatContent/Index"
import ChatInput from "../../components/ChatInput/Index"
import io from 'socket.io-client'

const socket = io('http://localhost:3000');

const Chat = () => {
  socket.on('connect', () => {
  });

  return (
    <div className="container mx-auto grid grid-cols-3">
      <div>
        side
      </div>
      <div className="h-screen">
        <ChatContent socket={socket} />
        <ChatInput socket={socket} />
      </div>
      <div>
        abc
      </div>
    </div>
  )
}

export default Chat
