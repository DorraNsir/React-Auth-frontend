import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const [name,setName]=useState('');

    useEffect(()=>{
      (
        async()=>{
          const respose = await fetch('http://localhost:8000/api/user',{
              
              headers:{'Content-Type':'application/json'},
              credentials:'include',
    
              });
              const content = await respose.json();
              setName(content.name);
        } 
  
      )();
    });
    return (
        <UserContext.Provider value={{ name,setName }} >
          {children}
        </UserContext.Provider>
      )
}