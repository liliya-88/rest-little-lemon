/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export default function CartContextProvider({ children }) {
  const ls = typeof window !== 'undefined' ? window.localStorage : null
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    if (cartProducts.length > 0) {
      ls.setItem('cart', JSON.stringify(cartProducts))
    }
  }, [ls, cartProducts])

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')))
    }
  }, [ls])

  const addProduct = (productId) => {
    setCartProducts((prev) => [...prev, productId])
  }
  
  console.log(cartProducts, 'cartProducts')
  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}
