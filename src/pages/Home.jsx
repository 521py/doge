import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const Home = () => {
  useAuth()

  return (
    <div>
      <div className='Home'><p>Home page...</p></div>
    </div>
  )
}
