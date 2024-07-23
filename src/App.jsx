import CartContextProvider from "./context/CartContext"
import Router from "./Router"

const App = () => {
  return (
    <CartContextProvider>
      <Router />
    </CartContextProvider>
  )
}

export default App