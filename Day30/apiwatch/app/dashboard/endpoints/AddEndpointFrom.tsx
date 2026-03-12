"use client"

import { useState } from "react"

interface Props {
    onAdd :()=>void
}

export default function AddEndpointForm ({onAdd}:Props){
    const [name,setName]=useState("");
    const[url,setUrl]=useState("");

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/endpoints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, url }),
      });

      if (res.ok) {
        setName("");
        setUrl("");
        onAdd?.();
        alert("Endpoint added!");
      } else {
        alert("Failed to add endpoint");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding endpoint");
    }
  };

    return (
         <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="API Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />
      <input
        type="url"
        placeholder="API URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border rounded p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-[#2F7A5F] text-white px-4 py-2 rounded cursor-pointer hover:text-gray-300"
      >
        Add Endpoint
      </button>
    </form>
    )
}