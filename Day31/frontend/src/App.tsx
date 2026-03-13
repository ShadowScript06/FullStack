import { useEffect, useRef, useState } from "react";
import Ws from "./Ws";

type User = {
  name: string;
  city: string;
};

function App() {
  const [data, setData] = useState<User[]>([]);
  const [messages, setMessages] = useState<string[]>([]);
 
  const messageLengthRef = useRef(0);

  const fetchMessages = async () => {
    console.log("fetch");
    
    const res = await fetch(
      `http://localhost:5000/messages?length=${messageLengthRef.current}`
    );

    const data = await res.json();
    messageLengthRef.current=data.length;
    setMessages(data);
   
   
  };

  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/short");
      const resData = await res.json();
      setData(resData.data);
    };

    const interval = setInterval(fetchData, 1000);
    const interval2=setInterval(fetchMessages,10000);
    return () => {
      clearInterval(interval);
      clearInterval(interval2); 
    }
      
    ;
  }, []);

 

  return (
    <>
    {data.length >0 ? (<ul>
        {data.map((obj, index) => (
          <li key={index}>
            Name: {obj.name} City: {obj.city}
          </li>
        ))}
      </ul>) :(<div>Loading...</div>)}
      

      {messages.length > 0 ? (
        <div>
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      ) : (
        <div>No messages</div>
      )}

      <Ws/>
    </>
  );
}

export default App;