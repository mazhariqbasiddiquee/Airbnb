import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css";

function Home() {
    const Navigate=useNavigate()
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [propertytype,setpropertytype]=useState("")
    const inputRef = useRef(null);

    useEffect(() => {
        fetch("https://airbnb-cvee.onrender.com/property")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setData(res.data);
            });
    }, []);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    const handlefilter=(event)=>{
        const value = event.target.value;
        setpropertytype(value)
        
    }
   const Submithandler=(_id,Name,img)=>{
  let token=localStorage.getItem("token")
  console.log(_id)
  if(!token){
    alert("please login first")
    Navigate("/login")
  }
  else{
    let startingDate = prompt('Enter the starting date (YYYY-MM-DD):');
 
    let endingDate = prompt('Enter the ending date (YYYY-MM-DD):');
    let todayDate=getFormattedDate()
   
    let ragex=/^202[4-9]{1}-(0[1-9]{1}|1[0-2]{1})-(0[1-9]{1}|[12][0-9]{1}|3[01]{1})$/
    if(ragex.test(startingDate)&&ragex.test(endingDate)&&todayDate<=startingDate&&startingDate<endingDate){
        let token=JSON.parse(localStorage.getItem("token"))
        let obj={
            Name:Name,
            img:img,
            Property_id:_id,
            start_date:startingDate,
            end_date:endingDate
        }
        fetch("https://airbnb-cvee.onrender.com/booking/add",{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorization":token.token
            },
            body:JSON.stringify(obj)
            
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
       
    }
    else{
        alert("enter the date in correct format")
    }

  }


  
   }
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetch(`https://airbnb-cvee.onrender.com/property?Location=${searchTerm}&PropertyType=${propertytype}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setData(res.data);
            });
           
           
        }, 1000); 

        return () => {
            clearTimeout(delayDebounceFn);
        };
    }, [searchTerm,propertytype]);

    return (
        <div>
            <div className="search-container">
                <input
                    ref={inputRef}
                    type="text"
                    className="search"
                    placeholder="Search home by location"
                    onChange={handleSearch}
                />
                 <input type="text" list="property-options" className="type-of-property"  placeholder="Filter by propertytype"  onChange={handlefilter}/>
                 <datalist id="property-options">
                 <option value="House">House</option>
                 <option value="Apartment">Apartment</option>
                 <option value="Unique Homes">Unique Homes</option>
            </datalist>
            </div>
           
            <div className="content-div">
                {data.map(({ img, Name, Location, About,_id }) => {
                    return (
                        <div key={_id} >
                            <img className="image" src={img} alt="" />
                            <div className="parent">
                               <div>
                                    <h2>{Name}</h2>
                                    <p>{Location}</p>
                                    <p>{About}</p>
                              </div>
                               <div>
                            <       button  className="booking-button"  onClick={()=>{
                                        Submithandler(_id,Name,img)
                                    }}>Book</button>
                              </div>    
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;


function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}