import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Authcontextprovider} from "./authcontext"
import "./Login.css"

function Signup(){
    const { name, setName } = useContext(Authcontextprovider);
    console.log(name,setName)
    const Naviagete=useNavigate()
    const [data,setData]=useState({
        Email:"",
        Password:"",
        Name:"",
       
    })
    const SubmitHandler=()=>{
        console.log(data)
        fetch("https://airbnb-cvee.onrender.com/guest/Signup",{
            method:"Post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.status=200){
            
                   Naviagete("/login")

            }
            else{
                alert(data.message)
            }
   
        })

    }
    return(
        <div className="main-div">
             <input type="text" placeholder="Enter Name" onChange={(e)=>{
                setData({...data, Name:e.target.value})
            }}/>
            <input type="email"  placeholder="Enter email"     onChange={(e)=>{
                setData({...data, Email:e.target.value})
            }}/>
            <input type="password" placeholder="Enter password" onChange={(e)=>{
                setData({...data, Password:e.target.value})
            }}/>
        
             <button onClick={SubmitHandler}>Login</button>
        </div>
    )
}

 export default Signup