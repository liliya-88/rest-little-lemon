/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export default function CartContextProvider({ children }) {
  const ls = typeof window !== 'undefined' ? window.localStorage : null
  const [cartProducts, setCartProducts] = useState([])
  const [ productIds, setProductIds ] = useState([])

  

  useEffect(() => {
    if (cartProducts.length > 0) {
      ls.setItem('cartProducts', JSON.stringify(cartProducts))
    }
    if (productIds.length > 0) {
      ls.setItem('productIds', JSON.stringify(productIds))
    }
  }, [ls, cartProducts, productIds])

  useEffect(() => {
    if (ls && ls.getItem('cartProducts')) {
      setCartProducts(JSON.parse(ls.getItem('cartProducts')))
    }
    if (ls && ls.getItem('productIds')) {
      setProductIds(JSON.parse(ls.getItem('productIds')))
    }
  }, [ls])
  /* to add */
  const addProduct = (product) => {
    setCartProducts((prev) => [...prev, product])
    setProductIds((prev) => [...prev, product.id])
  }

  console.log(cartProducts, 'cartProducts')
  console.log(productIds, 'productIds')

  /* to increase */
  const increaseQuantity = (productId) => {
    setCartProducts((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      return updatedCart
    })
  }
  /* to remove */
  function removeProduct(productId) {
    setCartProducts((prev) => {
      const updatedCart = prev.filter((item) => item.id !== productId)
      return updatedCart
    })
    setProductIds((prev) => prev.filter((id) => id !== productId))
  }

  /*   function removeProduct(productId) {
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId)
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos)
      }
      return prev
    })
  } */

  function clearCart() {
    setCartProducts([])
    setProductIds([])
  }
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        productIds,
        setProductIds,
        increaseQuantity,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}
