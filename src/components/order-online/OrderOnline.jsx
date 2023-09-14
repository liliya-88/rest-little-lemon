/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

const OrderOnline = () => {
  const {
    cartProducts,
    addProduct,
    productIds,
    increaseQuantity,
    removeProduct,
    clearCart,
  } = useContext(CartContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [country, setCountry] = useState('')
  const [dateOfDelivery, setDateOfDelivery] = useState('')
  const [comment, setComment] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  /* -------------------------------------- */
  function moreOfThisProduct(id) {
    increaseQuantity(id)
  }
  function lessOfThisProduct(id) {
    // removeProduct(id)
    removeProduct(id)
  }
  let total = 0
  /* Object.keys() */
  for (const productId of productIds) {
    const product = cartProducts.find((p) => p.id === productId)
    if (product) {
      const price = product.price || 0
      const quantity = product.quantity
      total += price * quantity
    }
  }

  return (
    <section className='wrapper_order_online'>
      <div className='columns_wrapper'>
        {/* first box */}
        <div className='box'>
          <div className='title_center order_online '>
            <h1>Your Cart </h1>
            {!cartProducts?.length ? (
              <small className='small_cart'>
                🛒 You have no items in the cart
              </small>
            ) : (
              <small className='small_cart'>
                🛒 You have {cartProducts.length} items in the cart
              </small>
            )}
          </div>
          {/* table with products */}
          {cartProducts.length > 0 && (
            <>
              <table className='table_cart'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((product) => (
                    <tr key={product.id}>
                      <td className='product_info_cell'>
                        <div className='product_image_box'>
                          <img src={product.src} alt={product.title} />
                        </div>
                        <p className='paragragh_title'>{product.title}</p>
                      </td>
                      {/* one td */}
                      <td className='text_dark'>
                        <button
                          className='btn bg_dark'
                          onClick={() => lessOfThisProduct(product.id)}>
                          –
                        </button>
                        <span className='quantity_label'>
                          {/*   {productIds.filter((id) => id === product.id).length}  */}
                          {/* {productIds.filter((id) => id === product.id).length} */}
                          {productIds.filter((id) => id === product.id).length *
                            product.quantity}
                          {/*  {product.quantity} */}
                        </span>
                        <div>
                          <button
                            className='btn bg_dark'
                            onClick={() => moreOfThisProduct(product.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      {/* one td */}
                      <td className='td_price_cart '>
                        $
                        {productIds.filter((id) => id === product.id).length *
                          product.price *
                          product.quantity}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td className='total'>
                      <strong>Total:</strong>${total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
        {/* second box */}
        <div className='box'>
          <h2 className='title_center order_online'>Order information</h2>

          {!!cartProducts?.length && (
            <form action='' method='POST'>
              <div className='div_with_input'>
                <label htmlFor='name' className='label'>
                  Name:
                </label>
                <input
                  type='text'
                  className='input'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ backgroundColor: name ? '#E8F0FE' : 'white' }}
                  placeholder='Mary'
                  required
                />
              </div>
              <div className='div_with_input'>
                <label htmlFor='email' className='label'>
                  Email:
                </label>
                <input
                  type='email'
                  className='input'
                  name='email'
                  value={email}
                  placeholder='example@gmail.com'
                  pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ backgroundColor: email ? '#E8F0FE' : 'white' }}
                  required
                />
              </div>
              <div className='city_holder'>
                <div>
                  <div className='div_with_input'>
                    <label htmlFor='city' className='label'>
                      City:
                    </label>
                    <input
                      type='text'
                      className='input'
                      name='city'
                      value={city}
                      placeholder='London'
                      onChange={(e) => setCity(e.target.value)}
                      style={{ backgroundColor: city ? '#E8F0FE' : 'white' }}
                      required
                    />
                  </div>
                  <div className='div_with_input'>
                    <label htmlFor='postalCode' className='label'>
                      Postal Code:
                    </label>
                    <input
                      type='text'
                      className='input'
                      name='postalCode'
                      value={postalCode}
                      placeholder='EC1A 1AA'
                      onChange={(e) => setPostalCode(e.target.value)}
                      style={{
                        backgroundColor: postalCode ? '#E8F0FE' : 'white',
                      }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className='div_with_input'>
                    <label htmlFor='country' className='label'>
                      Country:
                    </label>
                    <input
                      type='text'
                      className='input'
                      name='country'
                      value={country}
                      placeholder='UK'
                      onChange={(e) => setCountry(e.target.value)}
                      style={{ backgroundColor: country ? '#E8F0FE' : 'white' }}
                      required
                    />
                  </div>
                  <div className='div_with_input'>
                    <label htmlFor='streetAddress' className='label'>
                      Street Address:
                    </label>
                    <input
                      type='text'
                      className='input'
                      name='streetAddress'
                      value={streetAddress}
                      placeholder='22aB Baker Street'
                      onChange={(e) => setStreetAddress(e.target.value)}
                      style={{
                        backgroundColor: streetAddress ? '#E8F0FE' : 'white',
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className='div_with_input'>
                  <label htmlFor='dateOfDelivery' className='label'>
                    Date of Delivery:
                  </label>
                  <input
                    type='date'
                    className='input'
                    name='dateOfDelivery'
                    value={dateOfDelivery}
                    onChange={(e) => setDateOfDelivery(e.target.value)}
                    style={{
                      backgroundColor: dateOfDelivery ? '#E8F0FE' : 'white',
                    }}
                    required
                  />
                </div>
                <div className='div_with_input'>
                  <label htmlFor='comment' className='label'>
                    Comment:
                  </label>
                  <input
                    type='text'
                    className='input'
                    name='comment'
                    value={comment}
                    placeholder='some details'
                    onChange={(e) => setComment(e.target.value)}
                    style={{
                      backgroundColor: comment ? '#E8F0FE' : 'white',
                    }}
                  />
                </div>
              </div>
              <div className='div_with_button'>
                <button type='submit' className='btn btn-hipster2 '>
                  Continue to payment
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ---------------------------------------- */}
      </div>
    </section>
  )
}

export default OrderOnline
