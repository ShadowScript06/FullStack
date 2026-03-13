import { useEffect, useRef, useState } from "react";

function Ws() {

  const socketRef = useRef<WebSocket | null>(null);
  const [messages,setMessages] = useState<string[]>([]);
  const [input,setInput] = useState("");

  useEffect(() => {

    const socket = new WebSocket("ws://localhost:5000");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Connected to websocket");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(data);
    };

    return () => socket.close();

  }, []);

  const sendMessage = () => {
    socketRef.current?.send(input);
    setInput("");
  };

  return (
    <div>

      {messages.map((m,i)=>(
        <p key={i}>{m}</p>
      ))}

      <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  );
}

export default Ws;