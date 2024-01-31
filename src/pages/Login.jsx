import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

export default function Login() {
  const { name, setName } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    console.log('Login name:', name);
  }, [name]);

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const content = await response.json();
    setName(content.name);
    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="name@example.com"
            value={email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
      </form>
    </div>
  );
}
