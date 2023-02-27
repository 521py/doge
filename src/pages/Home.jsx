import React from 'react';
import { Navigate } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className='Home'><p>Home page...</p></div>
      <Navigate to="/signup" />
    </div>
  )
}
