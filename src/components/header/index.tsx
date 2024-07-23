import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../../context/CartContext'

const Header = () => {

  const { cart } = useCart()

  return (
    <div className='w-screen h-[80px] grid place-items-center'>
      <div className='mt-10 bg-red-500 text-white w-8 h-8 rounded-full px-1 flex items-center justify-center'>{cart}</div>
      <IoCartOutline size={40} />
    </div>
  )
}

export default Header