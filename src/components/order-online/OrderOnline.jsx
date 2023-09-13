/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'

const OrderOnline = () => {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext)
  const [products, setProducts] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  useEffect(() => {
    if (cartProducts.length > 0) {
      setProducts(cartProducts)
    } else {
      setProducts([])
    }
  }, [cartProducts])

  function moreOfThisProduct(id) {
    addProduct(id)
  }
  function lessOfThisProduct(id) {
    removeProduct(id)
  }
  let total = 0

  /* total+= cartProducts.find((p)=>p.id === product.id).product.price || 0 */
  return (
    <section className='wrapper_order_online'>
      <div className='columns_wrapper'>
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
          {products.length > 0 && (
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
                  {products.map((product) => (
                    <tr key={product.id}>
                      {/* console.log(product.id) */}
                      {/* one td */}
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
                          onClick={() => lessOfThisProduct(product)}>
                          –
                        </button>
                        <span className='quantity_label'>
                          {
                            cartProducts.filter((id) => id.id === product.id)
                              .length
                          }
                        </span>
                        <div>
                          <button
                            className='btn bg_dark'
                            onClick={() => moreOfThisProduct(product)}>
                            +
                          </button>
                        </div>
                      </td>
                      {/* one td */}
                      <td className='td_price_cart '>
                        $
                        {cartProducts.filter((id) => id.id === product.id)
                          .length * product.price}
                        <small
                          style={{
                            visibility: 'hidden',
                            position: 'absolute',
                            zIndex: '-10',
                          }}>
                          {
                            (total += cartProducts.find(
                              (id) => id.id === product.id
                            ).price)
                          }
                        </small>
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
        <div className='box'>some other stuff</div>
      </div>
    </section>
  )
}

export default OrderOnline

/* import { useContext, useEffect, useState } from 'react'

import Dish1 from '../../assets/food/chicken-parmesan.jpg'
import Dish2 from '../../assets/food/baked-salmon-with-lemon.jpg'
import Dish3 from '../../assets/food/grilled-steak.jpg'
import Dish4 from '../../assets/food/spinach-and-feta.jpg'
import Dish5 from '../../assets/food/vegetable-stir-fry.jpg'
import Dish6 from '../../assets/food/shrimp-scampi.jpg'
import Dish7 from '../../assets/food/mushroom-risotto.jpg'
import Dish8 from '../../assets/food/beef-stir-fry-with-broccoli.jpg'
import Dish9 from '../../assets/food/chicken-tikka-masala.jpg'
import Dish10 from '../../assets/food/honey-glazed-salmon-with-roasted-sweet-potatoes.jpg'
import Dish11 from '../../assets/menu/coffee.jpg'
import Dish12 from '../../assets/menu/tea.jpg'
import Dish13 from '../../assets/menu/juice.jpg'
import Dish14 from '../../assets/menu/cappuccino.jpg'
import CardOrderOnline from './props/CardOrderOnline'

const OrderOnline = () => {
  const [showSpecials, setShowSpecials] = useState(false)
  const [cart, setCart] = useState([])
  const [clicked, setClicked] = useState(false)
  const [cardOrderOnline, setCardOrderOnline] = useState([
    {
      id: 'sp1',
      src: `${Dish1}`,
      title: 'Chicken Parmesan',
      price: '$12',
      pText:
        'Breaded chicken cutlets topped with marinara sauce, melted cheese, and served over spaghetti or with a side of garlic bread.',
      meal: 'filterDiv breakfast',
      chosen: false,
    },
    {
      id: 'sp2',
      src: `${Dish2}`,
      title: 'Baked salmon',
      price: '$18',
      pText:
        'Fresh salmon fillets seasoned with lemon, herbs, and olive oil, then baked until tender and flaky. Serve it with a side of steamed asparagus or a green salad.',
      meal: 'filterDiv breakfast',
      chosen: false,
    },
    {
      id: 'sp3',
      src: `${Dish3}`,
      title: 'Grilled steak',
      price: '$25',
      pText:
        'A juicy steak cooked to perfection, served with a side of roasted vegetables like potatoes, carrots, and Brussels sprouts.',
      meal: 'filterDiv breakfast',
      chosen: false,
    },
    {
      id: 'sp4',
      src: `${Dish4}`,
      title: 'Spinach and feta',
      price: '$15',
      pText:
        'Chicken breasts stuffed with a mixture of spinach, feta cheese, and herbs, then baked until tender and juicy.',
      meal: 'filterDiv lunch',
      chosen: false,
    },
    {
      id: 'sp5',
      src: `${Dish5}`,
      title: 'Vegetable fry',
      price: '$22',
      pText:
        'A colorful mix of fresh vegetables like bell peppers, broccoli, carrots, and snap peas, stir-fried in a flavorful sauce and served over rice or noodles.',
      meal: 'filterDiv lunch',
      chosen: false,
    },

    {
      id: 'sp6',
      src: `${Dish6}`,
      title: 'Shrimp scampi',
      price: '$27',
      pText:
        'Succulent shrimp cooked in a garlic butter sauce with white wine and lemon juice, served over pasta or with crusty bread for dipping.',
      meal: 'filterDiv lunch',
      chosen: false,
    },
    {
      id: 'sp7',
      src: `${Dish7}`,
      title: 'Mushroom risotto',
      price: '$18',
      pText:
        'Creamy risotto cooked with Arborio rice, mushrooms, onions, garlic, and Parmesan cheese. It makes for a comforting and satisfying dinner.',
      meal: 'filterDiv dinner',
      chosen: false,
    },
    {
      id: 'sp8',
      src: `${Dish8}`,
      title: 'Beef & broccoli ',
      price: '$24',
      pText:
        'Tender strips of beef stir-fried with broccoli florets, cashews, garlic, ginger, and a savory sauce. Serve it over rice or noodles.',
      meal: 'filterDiv dinner',
      chosen: false,
    },
    {
      id: 'sp9',
      src: `${Dish9}`,
      title: 'Chicken tikka',
      price: '$11',
      pText:
        'Marinated and grilled chicken pieces simmered in a creamy tomato-based sauce with spices like garam masala, cumin, and turmeric. Serve it over rice or with naan bread.',
      meal: 'filterDiv dinner',
      chosen: false,
    },
    {
      id: 'sp10',
      src: `${Dish10}`,
      title: 'Glazed salmon',
      price: '$38',
      pText:
        'Salmon fillets brushed with a sweet and tangy honey glaze, then baked alongside roasted sweet potatoes for a balanced and flavorful meal.',
      meal: 'filterDiv dinner',
      chosen: false,
    },
    {
      id: 'sp11',
      src: `${Dish11}`,
      title: 'Coffee',
      price: '$5',
      pText:
        'Awaken your senses with our expertly brewed coffee, made from the finest beans sourced from around the world. We have the perfect cup of coffee to satisfy your cravings',
      meal: 'filterDiv drinks',
      chosen: false,
    },
    {
      id: 'sp12',
      src: `${Dish12}`,
      title: 'Tea',
      price: '$3',
      pText:
        ' Immerse yourself in a world of aromatic bliss with our selection of premium teas. Each cup offers a moment of tranquility and rejuvenation.',
      meal: 'filterDiv drinks',
      chosen: false,
    },
    {
      id: 'sp13',
      src: `${Dish13}`,
      title: 'Juice',
      price: '$15',
      pText:
        'Quench your thirst with our refreshing selection of freshly squeezed juices. Our juices are made from the freshest fruits to provide a revitalizing and invigorating experience.',
      meal: 'filterDiv drinks',
      chosen: false,
    },
    {
      id: 'sp14',
      src: `${Dish14}`,
      title: 'Cappuccino',
      price: '$10',
      pText:
        'Indulge in the classic Italian favorite, a harmonious blend of rich espresso, velvety steamed milk, and a delicate layer of frothy foam. Savor the perfect balance of flavors in every sip.',
      meal: 'filterDiv drinks',
      chosen: false,
    },
  ])

  const addToCart = (card) => {
    setCart((prevCart) => [...prevCart, card])
    setClicked(true)
  }
  console.log(cart, 'cart')
  useEffect(() => {
    const clickedSet = setTimeout(() => {
      setClicked(false)
    }, 2000)
    return () => clearTimeout(clickedSet)
  }, [cart])

  return (
    <section className='wrapper_order_online'>
      <div className='title_center pt-1 '>
        <h1>Our specials</h1>
        <div className='button_container'>
          <button
            className='btn'
            onClick={() => setShowSpecials((prev) => !prev)}>
            Show specials
          </button>
        </div>
      </div>
      <div
        className={`container_order_online ${
          showSpecials ? 'show_specials flashIn' : 'hide_specials fadeAway'
        }`}>
      
        {cardOrderOnline.map((card) => (
          <CardOrderOnline card={card} key={card.id} addToCart={addToCart} />
        ))}
      
        <p>{clicked && <mark>Added to cart</mark>}</p>
      </div>
    </section>
  )
}

export default OrderOnline */
