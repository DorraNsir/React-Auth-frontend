import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Register() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[navigate,setNavigate]=useState(false)

    const handelNAmeChange=(e)=>{
        setName(e.target.value)
    }
    const submit= async(e)=>{
        e.preventDefault();
        await fetch('http://localhost:8000/api/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name,
                email,
                password
            })
        }); 
        setNavigate(true)
    }

    if(navigate){
        return <Navigate to="/login"/>
    }
    
  return (
    <div>
              <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating">
            <input type="text" className="form-control" onChange={handelNAmeChange} placeholder="enter name" value={name} />
            <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating">
            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="name@example.com" value={email} />
            <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" value={password} />
            <label htmlFor="floatingPassword">Password</label>
        </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </form>
        
    </div>
  )
}
