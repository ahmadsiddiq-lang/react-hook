import React from 'react'
import { useAuth } from '../AuthProvider'

type Props = {}

function Login({ }: Props) {

  const { login, isLogin } = useAuth()

  return (
    <div className='h-screen flex items-center justify-center flex-col gap-5'>
      {String(isLogin)}
      <button onClick={() => login()} className='btn bg-white text-black'>Login</button>
    </div>
  )
}

export default Login