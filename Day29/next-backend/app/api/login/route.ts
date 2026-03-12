import  {cookies} from "next/headers";

import users from "../data";


type User={
    id:number,
    email:string,
    password:string,
    name:string,
    role: "admin"|"user"|"editor"
}







function find(arr:User[],email:string):User |null{
    for(let i=0; i<arr.length; i++ ){
        const user=arr[i];

        if(email===user.email){
            return user;
        }
    }

    return null
}


export async function POST(request:Request){
    const body =await request.json();

    const {email,password}=body;

    const existingUser=find(users,email);

    if(!existingUser){
        return Response.json({
            status:404,
            message:"User does not  exist."
        });
    }

    if(existingUser?.password===password){
        (await cookies()).set("token","logged-in",{
            httpOnly:true,
            path:"/"
        });

        return Response.json({status:200,
            message:"Login success"});
    }

    return Response.json(
        {status:401,
            message:"Invalid Credentials"
        }
    )
}
