export default async function Dashboard() {

type User={
    id:number,
    email:string,
    password:string,
    name:string,
    role: "admin"|"user"|"editor"
}


  const res = await fetch(
    "http://localhost:3000/api/users",
    { cache: "no-store" }
  )

  const users = await res.json()

  return (
    <div className="p-10">
      <h1>Dashboard</h1>

      {users.map((u:User)=>(
        <p key={u.email}>{u.name}</p>
      ))}
    </div>
  )
}