import User from "../model/user.model";
import bcrypt from "bcrypt";



async function createUser(name:string,email:string,password:string){
    const hashedPasword=await bcrypt.hash(password,10);

    const newUser=User.create({
        name,
        email,
        password:hashedPasword
    });

    return newUser;
}

async function getExistingUser(email:string){

    const existingUser=await User.findOne({email});
    console.log(existingUser);
    if(!existingUser) return null;

    return existingUser;

}

async function getUsers(){
    const users=await User.find();

    return users;
}

async function getUserbyId(userId:string){
    const user=await User.findById(userId);
    if (!user) return null;
    return user;
}


const userServices={
    createUser,
    getExistingUser,
    getUsers,
    getUserbyId
}

export default userServices;