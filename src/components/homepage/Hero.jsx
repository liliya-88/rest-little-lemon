import Image from '../../assets/food/hero-image-front.png'
import { Link } from 'react-router-dom'
import Card from './props/Card'
import { useRef, useState } from 'react'
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

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [cardInfo, setCardInfo] = useState([
    {
      id: 1,
      btnText: 'Know more',
      src: `${Dish1}`,
      title: 'Chicken Parmesan',
      price: '$12',
      pText:
        'Breaded chicken cutlets topped with marinara sauce, melted cheese, and served over spaghetti or with a side of garlic bread.',
      btnAction: 'Reserver a table 🛵',
    },
    {
      id: 2,
      btnText: 'Know more',
      src: `${Dish2}`,
      title: 'Baked salmon',
      price: '$18',
      pText:
        'Fresh salmon fillets seasoned with lemon, herbs, and olive oil, then baked until tender and flaky. Serve it with a side of steamed asparagus or a green salad.',
      btnAction: 'Reserver a table 🛵',
    },
    {
      id: 3,
      btnText: 'Know more',
      src: `${Dish3}`,
      title: 'Grilled steak',
      price: '$25',
      pText:
        'A juicy steak cooked to perfection, served with a side of roasted vegetables like potatoes, carrots, and Brussels sprouts.',
      btnAction: 'Reserver a table 🛵',
    },
    {
      id: 4,
      btnText: 'Know more',
      src: `${Dish4}`,
      title: 'Spinach and feta',
      price: '$15',
      pText:
        'Chicken breasts stuffed with a mixture of spinach, feta cheese, and herbs, then baked until tender and juicy.',
      btnAction: 'Reserver a table 🛵',
    },
    {
      id: 5,
      btnText: 'Know more',
      src: `${Dish5}`,
      title: 'Vegetable fry',
      price: '$22',
      pText:
        'A colorful mix of fresh vegetables like bell peppers, broccoli, carrots, and snap peas, stir-fried in a flavorful sauce and served over rice or noodles.',
      btnAction: 'Reserver a table 🛵',
    },

    {
      id: 6,
      btnText: 'Know more',
      src: `${Dish6}`,
      title: 'Shrimp scampi',
      price: '$27',
      pText:
        'Succulent shrimp cooked in a garlic butter sauce with white wine and lemon juice, served over pasta or with crusty bread for dipping.',
      btnAction: 'Reserver a table 🛵',
    },
    {
      id: 7,
      btnText: 'Know more',
      src: `${Dish7}`,
      title: 'Mushroom risotto',
      price: '$18',
      pText:
        'Creamy risotto cooked with Arborio rice, mushrooms, onions, garlic, and Parmesan cheese. It makes for a comforting and satisfying dinner.',
      btnAction: 'Reserver a table 🛵',
    },
    {
      id: 8,
      btnText: 'Know more',
      src: `${Dish8}`,
      title: 'Beef & broccoli ',
      price: '$24',
      pText:
        'Tender strips of beef stir-fried with broccoli florets, cashews, garlic, ginger, and a savory sauce. Serve it over rice or noodles.',
      btnAction: 'Reserver a table 🛵',
    },
    {
      id: 9,
      btnText: 'Know more',
      src: `${Dish9}`,
      title: 'Chicken tikka',
      price: '$11',
      pText:
        'Marinated and grilled chicken pieces simmered in a creamy tomato-based sauce with spices like garam masala, cumin, and turmeric. Serve it over rice or with naan bread.',
      btnAction: 'Reserver a table 🛵',
    },
    {
      id: 10,
      btnText: 'Know more',
      src: `${Dish10}`,
      title: 'Glazed salmon',
      price: '$38',
      pText:
        'Salmon fillets brushed with a sweet and tangy honey glaze, then baked alongside roasted sweet potatoes for a balanced and flavorful meal.',
      btnAction: 'Reserver a table 🛵',
    },
  ])

  const [stateActive, setStateActive] = useState(false)
  const [isDown, setIsDown] = useState(false)
  const [scrollX, setScrollX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  // eslint-disable-next-line no-unused-vars

  const scroll = useRef(null)
  const handleMouseUp = () => {
    setIsDown(false)
    setStateActive(false)
  }
  const handleMouseLeave = () => {
    setIsDown(false)
    setStateActive(false)
  }

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDown(true)
    setStateActive(true)
    setScrollX(e.pageX - scroll.current.offsetLeft)
    setScrollLeft(scroll.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDown) return
    e.preventDefault()
    setStateActive(true)
    const element = e.pageX - scroll.current.offsetLeft
    const scrolling = (element - scrollX) * 2
    scroll.current.scrollLeft = scrollLeft - scrolling
  }
  /* useEffect(() => {
    
  },[stateActive, setStateACtive]) */
  return (
    <>
      <div className='main_container-dark'>
        <section className='section-hero-up'>
          <div className='title-hero mobile'>
            <h1 className='h1_title'>
              Little Lemon<span className='h1_span'>Chicago</span>
            </h1>
          </div>
          <div className='flex-hero'>
            <section className='section-text'>
              <div className='title-hero desktop'>
                <h1 className='h1_title'>
                  Little Lemon<span className='h1_span'>Chicago</span>
                </h1>
              </div>
              <p className='p-text-light'>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <Link to={'/reservations'} className='a_link_button btn-width'>
                Reserve a table
              </Link>
            </section>
            <section className='section-image'>
              <div className='img_container_hero'>
                <img src={Image} alt='hero' className='img img_hero' />
                <br />
              </div>
            </section>
          </div>
        </section>
      </div>
      <Link to='/menu' className='a_link_button2 sm-btn'>
        🍽 Menu Online
      </Link>
      {/* cards */}
      <div className='main_container-light'>
        <section className='main'>
          <h3 className='title-above'>Specials</h3>
          <div className='container_horizontal'>
            <div
              className={
                stateActive
                  ? 'scroll active scroll_position'
                  : 'scroll scroll_position'
              }
              ref={scroll}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}>
              {/* single card */}
              {cardInfo.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* =========== */}
    </>
  )
}

export default Hero
