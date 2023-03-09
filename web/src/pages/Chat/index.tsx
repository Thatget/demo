import ChatContent from "../../components/ChatContent/Index"
import ChatInput from "../../components/ChatInput/Index"
import io from 'socket.io-client'

const socket = io('http://localhost:3000');

const Chat = () => {
  socket.on('connect', () => {
  });

  return (
    <div style={{height: '100vh'}}>
      <ChatContent socket={socket} />
      <ChatInput socket={socket} />
    </div>
  )
}

export default Chat
