import React from 'react'
import Header from '../../components/header'
import CardProduct from '../../components/card_product'

function Home() {
  return (
    <div>
      <Header />
      <div className='w-screen h-[400px] grid place-items-center'>
        <CardProduct />
      </div>
    </div>
  )
}

export default Home