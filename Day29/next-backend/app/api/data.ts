type User={
    id:number,
    email:string,
    password:string,
    name:string,
    role: "admin"|"user"|"editor"
}
const users:User []  = [
  {
    id: 1,
    name: "Prajwal Jadhav",
    email: "prajwal@test.com",
    password: "pass123",
    role: "admin"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@test.com",
    password: "pass123",
    role: "user"
  },
  {
    id: 3,
    name: "Ananya Patel",
    email: "ananya@test.com",
    password: "pass123",
    role: "user"
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "vikram@test.com",
    password: "pass123",
    role: "editor"
  },
  {
    id: 5,
    name: "Neha Verma",
    email: "neha@test.com",
    password: "pass123",
    role: "user"
  }
];

export default users;