import {createSlice} from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

 const userReducer = createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        login:(state,action)=> {
            state.user = action.payload;

        }, logout:(state)=> {
            state.user = null;
        }, signup:(state,action)=>{
          createUserWithEmailAndPassword(auth,"muhammadshahidraficp@gmail.com","Qwerty@123");
        }
    }
});

export default  userReducer.reducer;

 export const {login, logout,signup} = userReducer.actions;