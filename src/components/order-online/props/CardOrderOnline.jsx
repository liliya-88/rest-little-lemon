/* import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext' */

/* eslint-disable react/prop-types */
/* const CardOrderOnline = (props) => {
  const [clicked, setClicked] = useState(false)
  const { addProduct } = useContext(CartContext)
  const handleAddToCart = () => {
    props.addToCart(props.card)
    addProduct(props.card)
    setClicked(true)
  }

  return (
    <div className='filterDiv_order_online show_order_online'>
      <div className='img_container2'>
        <img
          src={props.card.src}
          alt={props.card.title}
          className='img img_order_online'
        />
      </div>
      <div className='card_inner'>
        <h4 className='h4_title_order_online'>
          {props.card.title}
          <span>{props.card.price}</span>
        </h4>
        <hr />
        <p className='p_order_online'>
          {props.card.pText}
          <br />
        </p>
        {clicked ? (
          <button
            className='btn center'
            onClick={handleAddToCart}
            disabled
            style={{ backgroundColor: 'lightgreen', color: 'black' }}>
            Added to Cart
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

export default CardOrderOnline */

/*  onClick={handleAddToCart} */

/*   const handleAddToCart = () => {
    // Check if the card is already in the cart
    const isInCart = props.cart.some((item) => item.id === props.card.id)

    if (isInCart) {
      // Remove the card from the cart
      const updatedCart = props.cart.filter((item) => item.id !== props.card.id)
      props.setCart(updatedCart)
    } else {
      // Add the card to the cart
      const updatedCart = [...props.cart, props.card]
      props.setCart(updatedCart)
    }
  } */

/*   useEffect(() => {
    const clickedSet = setTimeout(() => {
      setClicked(false)
    }, 2000)
    return () => clearTimeout(clickedSet)
  }, [props.addToCart]) */
