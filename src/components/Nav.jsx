import React, { useContext, useEffect, useState } from 'react';
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
    <div className="">
    <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <Link to="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
              Flowtrail UI
            </Link>

          </div>
          <nav className=''>
            {/* Navigation links */}
            {name === '' || name===undefined ? (
            <><Link class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/">Home</Link>
            <Link class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/login">Login</Link>
            <Link class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/register">Register</Link>
            </>
            ) : (

            <Link onClick={logout} class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to="/login">Logout</Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  </div>
  );
}
