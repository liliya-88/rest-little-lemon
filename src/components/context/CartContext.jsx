/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export default function CartContextProvider({ children }) {
  const ls = typeof window !== 'undefined' ? window.localStorage : null
  const [cartProducts, setCartProducts] = useState([])
  const [productIds, setProductIds] = useState([])

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

  const addProduct = (product) => {
    setCartProducts((prev) => [...prev, product])
    /*  setProductIds((prev) => [...prev, productId]) */
  }

  console.log(cartProducts, 'cartProducts')
  function removeProduct(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId)
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos)
      }
      return prev
    })
  }


  
  /*   function removeProduct2(productId) {
    setCartProducts((prev) => {
      const updatedCart = prev.filter((item) => item.id !== productId.id)
      return updatedCart
    })
  } */
  function removeProduct2(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId)
      /* const pos = prev.findIndex((item) => item.id === productId.id) */
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos)
      }
      const updatedCart = prev.filter((item) => item.id !== productId.id)

      if (updatedCart.length === 1) {
        // If only one item left, remove it from the cart
        return []
      }

      return prev || updatedCart
    })
  }
  function clearCart() {
    setCartProducts([])
  }
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        removeProduct2,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}
