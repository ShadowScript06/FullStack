import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "./counterSlice";
import usersReducer from "./userSlice"


export const store=configureStore({
    reducer:{
        counter:counterReducer,
        users:usersReducer
    }
})