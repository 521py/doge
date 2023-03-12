import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const User = () => {
  useAuth()

  return (
    <div className='User'>User page...</div>
  )
}
