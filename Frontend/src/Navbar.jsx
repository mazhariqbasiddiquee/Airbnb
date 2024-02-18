import React from "react";
import { useState,useEffect,useContext } from "react";
import {Authcontextprovider} from "./authcontext"
import { useNavigate } from "react-router-dom";

function Navbar(){
    const {name,setName}=useContext(Authcontextprovider)
    let token=JSON.parse(localStorage.getItem("token"))
    const Navigate=useNavigate()
    setName(token?.Name)
   useEffect(()=>{
    console.log(name)

   },[name])

   const logoutHandler=()=>{
    localStorage.removeItem("token")
    setName(null)
   }
    return(
        <div>
            <h1  style={{display:"flex","justifyContent":"center", marginBottom:"20px"}} >Book Your Dream House</h1>
            <div style={{display:"flex","justifyContent":"space-around", border:"1px solid black" , marginBottom:"10vh", padding:"15px"}}>
                <p onClick={()=>{
                    Navigate("/")

                }}>Home</p>
                <p onClick={()=>{
                    if(token){
                        Navigate("/pastbooking")
                    }
                    else{
                        alert("please login first")
                    }
                   
                }}>Past Booking</p>
                {name ?( <> <p>{name}</p> <p onClick={logoutHandler}>Logout</p></>) : (<><p onClick={()=>{
                    Navigate("login")
                }}>Login</p> <p onClick={()=>{
                    Navigate("/signup")
                }}>Signup</p></>)}

               
            </div>
        </div>
    )
}

export default Navbar