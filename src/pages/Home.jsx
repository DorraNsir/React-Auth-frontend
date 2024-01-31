import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'


export default function Home() {
  const { name } = useContext(UserContext)
  return (

    <div>
      {name?'Hi '+name:'You ara not logged'}
    </div>

  )
}
