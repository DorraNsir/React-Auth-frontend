import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';

export default function Nav() {
  const { name, setName } = useContext(UserContext);
  useEffect(() => {
    console.log('Login name from logout:', name);
  }, [name]);


  const logout = async () => {
    try {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      // Update the name after the logout request is completed
      setName('');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            {name === '' || name===undefined ? (
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/login" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
