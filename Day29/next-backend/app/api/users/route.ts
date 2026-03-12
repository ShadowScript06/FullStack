import users from "../data";





export async function GET(){
    return Response.json(users);
}