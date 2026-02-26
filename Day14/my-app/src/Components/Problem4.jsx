import React, { useEffect, useState } from "react";

function Problem4() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle");
  const [lastSavedText, setLastSavedText] = useState("");

  useEffect(()=>{
    if(text===lastSavedText) return;

    if(!text.trim()) return;

    const timer=setTimeout(()=>{
        setStatus("saving");
        fakeApi(text).then(()=>{
            setLastSavedText(text);
            setStatus("saved");   
        })
    },1000);

    return ()=>{
        clearTimeout(timer);
    }
  },[text,lastSavedText])
  return (
    <div>
      <h3> Auto Save Draft</h3>

      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setStatus("idle");
        }}
      />

      <p>
        {status ==="saving" && "Saving.."}
        {status ==="saved" && "Saved.."}
      </p>

      <p>{lastSavedText}</p>
    </div>
  );
}

export default Problem4;

function fakeApi(data){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Saved to Server: ",data);
            resolve();
        },2000);
    })
}