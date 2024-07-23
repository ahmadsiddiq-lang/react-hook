import React from 'react'
import { useAuth } from '../AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

function Protect() {

  const { isLogin } = useAuth()

  return isLogin ? <Outlet /> : <Navigate to={'/login'} />
}

export default Protect