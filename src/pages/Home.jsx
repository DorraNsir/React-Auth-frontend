import React, { useContext,useEffect } from 'react'
import { UserContext } from '../context/userContext'
import Nav from '../components/Nav'

// import { useNavigate } from "react-router-dom";


export default function Home() {
  const { name,lastname } = useContext(UserContext)
  
 
  // const navigate = useNavigate();
  // useEffect(() => {
  //   console.log('Login name:', name);
  //   navigate('/')
  // }, [name])
 // refresh

  return (

    <div>
      <Nav/>
      {name?'Hi '+name +' '+lastname:'You ara not logged'}
    </div>

  )
}
