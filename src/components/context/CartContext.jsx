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
  //to remove
  /*   const removeProduct = (productId) => {
    setCartProducts((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      
      return updatedCart
    })
  }
   */
  const removeProduct = (productId) => {
    setCartProducts((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.id === productId) {
          // Decrease quantity by 1
          return { ...item, quantity: item.quantity - 1 }
        }
        return item // Return unchanged item
      })

      // Remove items with quantity 0
      const filteredCart = updatedCart.filter((item) => item.quantity !== 0)
      // Update productIds by filtering out the removed product
      const updatedProductIds = updatedCart
        .filter((item) => item.quantity > 0)
        .map((item) => item.id)
      setProductIds(updatedProductIds)

      return filteredCart
    })
  }
  /* to clear */
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
