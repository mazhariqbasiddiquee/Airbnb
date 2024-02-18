import React from "react";
import { useContext,useState,createContext } from "react";


export const Authcontextprovider=createContext()

function Authcontext({children}){
    const [name,setName]=useState(null)

    return(
   <Authcontextprovider.Provider  value={{ name, setName }}>
     {children}

   </Authcontextprovider.Provider>

    )

}

export default Authcontext