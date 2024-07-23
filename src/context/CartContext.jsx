/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'


const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState(0)

  return (
    <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider