/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CardSpecials = (props) => {
  const [clicked, setClicked] = useState(false)
  const { cartProducts, addProduct } = useContext(CartContext)
  const handleAddToCart = () => {
    // props.addToCart(props.card)
    addProduct(props.card)
    setClicked(true)
  }
  useEffect(() => {
    const clickedSet = setTimeout(() => {
      setClicked(false)
    }, 2000)
    return () => clearTimeout(clickedSet)
  }, [cartProducts])
  return (
    <div className={`${props.card.meal}`}>
      <div className='img_container'>
        <img
          src={props.card.src}
          alt={props.card.title}
          className='img img_specials'
        />
      </div>
      <div className='card_inner'>
        <h4 className='h4_title'>
          {props.card.title}
          <span>{props.card.price}</span>
        </h4>
        <hr />
        <p className='p_specials'>{props.card.pText}</p>
        {clicked ? (
          <button
            className='btn center'
            onClick={handleAddToCart}
            style={{ backgroundColor: 'lightgreen', color: 'black' }}>
            ✔️Added to Cart
          </button>
        ) : (
          <button className='btn center' onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}

export default CardSpecials
