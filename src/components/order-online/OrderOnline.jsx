/* eslint-disable no-undef */
/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */

import { useCallback, useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

const OrderOnline = () => {
  const {
    cartProducts,
    productIds,
    orderInfo,
    increaseQuantity,
    removeProduct,
    clearCart,
  } = useContext(CartContext)
  /* --- */
  const localSt = typeof window !== 'undefined' ? window.localStorage : null
  const [inputOrder, setInputOrder] = useState(() => {
    const formDataOrder = localSt
      ? JSON.parse(localSt.getItem('formDataOrder'))
      : null
    return {
      name: formDataOrder ? formDataOrder.name || '' : '',
      email: formDataOrder ? formDataOrder.email || '' : '',
      city: formDataOrder ? formDataOrder.city || '' : '',
      postalCode: formDataOrder ? formDataOrder.postalCode || '' : '',
      streetAddress: formDataOrder ? formDataOrder.streetAddress || '' : '',
      country: formDataOrder ? formDataOrder.country || '' : '',
      dateOfDelivery: formDataOrder ? formDataOrder.dateOfDelivery || '' : '',
      comment: formDataOrder ? formDataOrder.comment || '' : '',
    }
  })
  // const [isSuccess, setIsSuccess] = useState(false)
  const [minDate2, setMinDate2] = useState('')
  const [preloader2, setPreloader2] = useState(false)
  const [sentMessage2, setSentMessage2] = useState(false)
  const [success2, setSuccess2] = useState(false)

  /* -------------------------------------- */
  /* useEffects */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (inputOrder && localSt) {
      localStorage.setItem('formDataOrder', JSON.stringify(inputOrder))
    }
  }, [inputOrder, localSt])

  useEffect(() => {
    if (localSt && localStorage.getItem('formDataOrder')) {
      setInputOrder(JSON.parse(localSt.getItem('formDataOrder')))
    }
  }, [localSt])
  /*  limit the minimum date of an input field based on the current date and time */
  useEffect(() => {
    const now = new Date().toISOString().split('T')[0]
    setMinDate2(now)
  }, [])

  useEffect(() => {
    if (cartProducts.length === 0) {
      localStorage.removeItem('formDataOrder')
    }
  }, [cartProducts, localSt])

  useEffect(() => {
    if (sentMessage2 && !preloader2) {
      setSuccess2(false)
    }
  }, [success2, preloader2, sentMessage2])
  /* ------------- */
  function moreOfThisProduct(id) {
    increaseQuantity(id)
  }
  function lessOfThisProduct(id) {
    // removeProduct(id)
    removeProduct(id)
    if (cartProducts.length === 0) {
      //clear localStorage
    }
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

  /* ----- */
  function handleChange(event) {
    const { name, value } = event.target
    setInputOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleInputBlur = useCallback(() => {
    setInputOrder((prevState) => ({
      ...prevState,
      name: prevState.name,
      email: prevState.email,
      city: prevState.city,
      postalCode: prevState.postalCode,
      streetAddress: prevState.streetAddress,
      country: prevState.country,
      dateOfDelivery: prevState.dateOfDelivery,
      comment: prevState.comment,
    }))
  }, [])
  /* test================================= */

  /*   const order_information = orderInfo.map((order, index) => {
    return `
       Quantity_of_dishes:${orderInfo.length},
      Dish:${index + 1}. ${order.title},
      Price:${order.price},
      Quantity:${order.quantity},
      Id:${order.id},
      `
  }) */

  /* =================================== */
  async function handleSubmit(e) {
    const order_information = orderInfo.map((order, index) => {
      return `
       Quantity_of_dishes:${orderInfo.length},
      Dish:${index + 1}. ${order.title},
      Price:${order.price},
      Quantity:${order.quantity},
      Id:${order.id},
      `
    })
    setPreloader2(true)
    if (preloader2) {
      const url = 'https://usebasin.com/f/6eee2fc7b10c'
      const createMessage = async (url, data) => {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'https://usebasin.com/f/6eee2fc7b10c',
          },
          body: JSON.stringify(data),
        })
        setSentMessage2(true)
        return await response.json()
      }
      const messageForm = `Name:${inputOrder.name},
    Email:${inputOrder.email},
    City:${inputOrder.city},
    PostalCode: ${inputOrder.postalCode},
    Country: ${inputOrder.country},
    DateOfDelivery: ${inputOrder.dateOfDelivery},
    Comment: ${inputOrder.comment},
    Quantity_of_dishes:${orderInfo.length},
    Dish:${order_information}
    `
      // const createResponse = await createMessage(url, messageForm)
    }
    /* ------------------ */
    setTimeout(() => {
      setPreloader2(false)
    }, 3500)
    setTimeout(() => {
      if (success2) {
        setSentMessage2(true)
        setSuccess2(true)
      }
    }, 3700)
    setTimeout(async () => {
      const createResponse = await createMessage(url, messageForm)
      setSuccess2(false)
      setSentMessage2(false)
      setInputOrder({
        name: '',
        email: '',
        city: '',
        postalCode: '',
        country: '',
        dateOfDelivery: '',
        comment: '',
      })
      return clearCart()
    }, 3900)
    //clear localStorage
    localStorage.removeItem('formDataOrder')
    localStorage.removeItem('cartProducts')
    localStorage.removeItem('productIds')
  }
  /* ----- */
  return (
    <section className='wrapper_order_online'>
      <div className='columns_wrapper flashIn'>
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
            <form
              id='order_info'
              name='order_info'
              encType='multipart/form-data'
              onSubmit={handleSubmit}
              action='https://usebasin.com/f/6eee2fc7b10c'
              method='POST'>
              <div className='div_with_input'>
                <label htmlFor='name' className='label'>
                  Name:
                </label>
                <input
                  type='text'
                  className='input'
                  name='name'
                  value={inputOrder.name}
                  onChange={handleChange}
                  onBlur={handleInputBlur}
                  style={{
                    backgroundColor: inputOrder.name ? '#E8F0FE' : 'white',
                  }}
                  placeholder='Mary Smith'
                  maxLength={30}
                  autoComplete='true'
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
                  value={inputOrder.email}
                  placeholder='example@gmail.com'
                  pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
                  onChange={handleChange}
                  onBlur={handleInputBlur}
                  style={{
                    backgroundColor: inputOrder.email ? '#E8F0FE' : 'white',
                  }}
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
                      value={inputOrder.city}
                      placeholder='London'
                      onChange={handleChange}
                      onBlur={handleInputBlur}
                      style={{
                        backgroundColor: inputOrder.city ? '#E8F0FE' : 'white',
                      }}
                      maxLength={20}
                      autoComplete='true'
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
                      value={inputOrder.postalCode}
                      placeholder='EC1A 1AA'
                      onChange={handleChange}
                      onBlur={handleInputBlur}
                      style={{
                        backgroundColor: inputOrder.postalCode
                          ? '#E8F0FE'
                          : 'white',
                      }}
                      maxLength={10}
                      autoComplete='true'
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
                      value={inputOrder.country}
                      placeholder='UK'
                      onChange={handleChange}
                      onBlur={handleInputBlur}
                      style={{
                        backgroundColor: inputOrder.country
                          ? '#E8F0FE'
                          : 'white',
                      }}
                      maxLength={25}
                      autoComplete='true'
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
                      value={inputOrder.streetAddress}
                      placeholder='22aB Baker Street'
                      onChange={handleChange}
                      onBlur={handleInputBlur}
                      style={{
                        backgroundColor: inputOrder.streetAddress
                          ? '#E8F0FE'
                          : 'white',
                      }}
                      maxLength={55}
                      autoComplete='true'
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
                    value={inputOrder.dateOfDelivery}
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    style={{
                      backgroundColor: inputOrder.dateOfDelivery
                        ? '#E8F0FE'
                        : 'white',
                    }}
                    max='2023-12-30'
                    min={minDate2}
                    required
                  />
                </div>
                <div className='div_with_input'>
                  <label htmlFor='comment' className='label'>
                    Comment:
                  </label>
                  <textarea
                    type='text'
                    className='input'
                    name='comment'
                    value={inputOrder.comment}
                    placeholder='some details'
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    style={{
                      backgroundColor: inputOrder.comment ? '#E8F0FE' : 'white',
                      resize: 'vertical',
                      maxHeight: '5rem',
                    }}
                    maxLength={200}
                  />
                </div>
                <input
                  type='hidden'
                  name='orderInfo'
                  value={JSON.stringify(orderInfo)}
                />
              </div>
              <div className='div_with_button'>
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className='btn btn-hipster2'>
                  Continue to payment
                </button>
              </div>
              {/* orderInfo */}
              <input
                type='hidden'
                name='dish'
                value={JSON.stringify(order_information)}
              />
              <div
                className='g-recaptcha'
                data-sitekey='6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy'></div>
            </form>
          )}
          {success2 ? (
            <div id='message' className='show-message'>
              <div className='success'>
                <h3>Thanks!</h3>
                <p>
                  Your reservation has been successfully submitted, and we will
                  reach out to you soon.
                </p>
              </div>
            </div>
          ) : (
            ''
          )}
          {preloader2 && (
            <div id='message' className='show-message'>
              <div className='preloader'>
                <div className='loading-dot'></div>
              </div>
            </div>
          )}
        </div>

        {/* ---------------------------------------- */}
      </div>
    </section>
  )
}

export default OrderOnline
