import React, { useState } from 'react'

function Problem26() {
    const [status, setStatus] = useState("loading"); 

     const renderContent = () => {
    switch (status) {
      case "loading":
        return <p>Loading... Please wait.</p>;
      case "success":
        return <p>Data loaded successfully! ✅</p>;
      case "error":
        return <p>Error occurred while loading data. ❌</p>;
      default:
        return <p>Unknown status.</p>;
    }
  };
  return (
    <div> {renderContent()}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setStatus("loading")}>Loading</button>
        <button onClick={() => setStatus("success")}>Success</button>
        <button onClick={() => setStatus("error")}>Error</button>
      </div></div>
  )
}

export default Problem26