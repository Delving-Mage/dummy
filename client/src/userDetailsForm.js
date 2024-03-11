import { useState, useReducer } from 'react';
import { USERNAME } from './constants/userDetailsContexts';
 
const UserDetailsForm=()=>{

    const initialUserDetails ={
        username:"",
        mobile:"",
        dob:""
    }

    const userDetailsReducer =(state=initialUserDetails,action)=>{
        if(action.type===USERNAME){
            return {...state,username:action.payload}
        }
        return state;
    }
 
    const [data, dispatch]= useReducer(userDetailsReducer,initialUserDetails)

   
    console.log(data,'daat')

    return(
        <>
        {/* <label>username</label>
        <input value={username}></input>
        <label>Mobile num</label>
        <input value={username}></input>
        <label>DOB</label>
        <input value={username}></input>
        <label>Region</label>
        <input value={username}></input>
        <label>City</label>
        <input value={username}></input> */}
        <button onClick={()=>dispatch({type:"USERNAME",payload:"Reacttc"})}>Click</button>
        </>
    )
}
export default UserDetailsForm;