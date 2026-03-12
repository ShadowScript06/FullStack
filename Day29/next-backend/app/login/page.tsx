"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data=await res.json();

    if(data.status===200){
        router.push("/dashboard")
    }else{
        
        setEmail("");
        setPassword("");
        alert(data.message + " Please try again");
    }

    
  };

  return (
    <div className="p-10">
      <label>Email</label>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Page;
