import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Authcontextprovider} from "./authcontext"
import "./Login.css"

function Login(){
    const { name, setName } = useContext(Authcontextprovider);
    
    const Naviagete=useNavigate()
    const [data,setData]=useState({
        Email:"",
        Password:""
    })
    const SubmitHandler=()=>{
        fetch("https://airbnb-cvee.onrender.com/guest/login",{
            method:"Post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.token){
                alert("login successfull")
                localStorage.setItem("token",JSON.stringify(data))
                setName(data.Name)
                Naviagete("/")

            }
            else{
                alert(data.message)
            }
   
        })

    }
    return(
        <div className="main-div">
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

 export default Login