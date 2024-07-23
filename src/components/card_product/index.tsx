import React from 'react'
import { IoImageOutline } from 'react-icons/io5'
import { useCart } from '../../context/CartContext'

const CardProduct = () => {

  const { setCart } = useCart()

  return (
    <div className='border rounded-md border-black p-2'>
      <div className='text-center w-full flex items-center justify-center'>
        <IoImageOutline size={100} />
      </div>
      <div className='mt-4'>
        <h1 className='font-semibold'>Nama Produk</h1>
        <p className='text-red-500 font-medium'>20.000</p>
        <div className='mt-2 flex-col flex'>
          <button
            onClick={() => setCart((e: number) => (e + 1))}
            className='mt-2 h-10 text-white bg-green-500 rounded-md px-2 text-sm'>Tambah ke keranjang</button>
          <button
            onClick={() => setCart(0)}
            className='mt-2 h-10 text-white bg-red-500 rounded-md px-2 text-sm'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct