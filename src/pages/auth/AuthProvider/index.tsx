import React, { createContext, useContext, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'


const AuthContext = createContext({
  isLogin: false,
  login: () => { },
  logout: () => { }
})

function AuthProvide({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate();
  const login = () => {
    setIsLogin(true)
    navigate('/')
  }

  const logout = () => {
    setIsLogin(false)
  }

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvide;