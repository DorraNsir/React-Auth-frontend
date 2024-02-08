import React, { useContext} from 'react'
import { UserContext } from '../context/userContext'
import Nav from '../components/Nav'



export default function Home() {
  const { name,lastname } = useContext(UserContext)
  
 
  

  return (

    <div>
      <Nav/>
      {name?'Hi '+name +' '+lastname:'You ara not logged'}
    </div>

  )
}
