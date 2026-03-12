"use client"
import AddEndpointForm from "./AddEndpointFrom";
import EndpointsList from "./EndpointList";


export default function EndpointsPage() {
  return (
    <div className="p-6 w-1/2 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your API Endpoints</h1>
      <AddEndpointForm  onAdd={()=>{
        console.log("Endpoint added.")
      }}/>
      <EndpointsList />
    </div>
  );
}