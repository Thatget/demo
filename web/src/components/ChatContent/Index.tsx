import { Socket } from 'socket.io-client';

interface Props {
  socket: Socket;
}

const ChatContent: React.FC<Props> = ({ socket }) => {
  socket.on('sent-data', data => {
    console.log(data);
  })
  socket.emit('ping',{})
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </div>
    </div>
  )
}

export default ChatContent
