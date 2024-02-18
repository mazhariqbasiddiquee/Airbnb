import React, { useState, useEffect, useRef,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {Authcontextprovider} from "./authcontext"
import "./Home.css";

function PastBooking() {
    const Navigate=useNavigate()
    const [data, setData] = useState([]);
    const {name,setName}=useContext(Authcontextprovider)
    let token=JSON.parse(localStorage.getItem("token"))

    if(!token){
        alert("please login first")
        Navigate("/login")
    }
    
    useEffect(() => {
        fetch("https://airbnb-cvee.onrender.com/booking",{
            method:"GET",
            headers:{
                "content-type":"application/json",
                "authorization":token?.token
            }
        })
        .then((res) => res.json())
        .then((res) => {
            setData(res.data)
            console.log(res);
        });
    }, [name]);


    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    return (
        <div>
           <div className="content-div">
                {data.map(({ img, Name, start_date, end_date }) => {
                    return (
                        <div key={Name}>
                            <img className="image" src={img} alt="" />
                            <div>
                                <h2>{Name}</h2>
                                <p>Start Date: {formatDate(start_date)}</p>
                                <p>End Date: {formatDate(end_date)}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default PastBooking;
