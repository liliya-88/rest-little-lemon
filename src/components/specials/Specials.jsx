import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import CardSpecials from './props/CardSpecials'
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

function Specials() {
  // eslint-disable-next-line no-unused-vars
  const [cardSpecials, setCardSpecials] = useState([
    {
      id: 'sp1',
      src: `${Dish1}`,
      title: 'Chicken Parmesan',
      price: 12,
      pText:
        'Breaded chicken cutlets topped with marinara sauce, melted cheese, and served over spaghetti or with a side of garlic bread.',
      meal: 'filterDiv breakfast',
    },
    {
      id: 'sp2',
      src: `${Dish2}`,
      title: 'Baked salmon',
      price: 18,
      pText:
        'Fresh salmon fillets seasoned with lemon, herbs, and olive oil, then baked until tender and flaky. Serve it with a side of steamed asparagus or a green salad.',
      meal: 'filterDiv breakfast',
    },
    {
      id: 'sp3',
      src: `${Dish3}`,
      title: 'Grilled steak',
      price: 25,
      pText:
        'A juicy steak cooked to perfection, served with a side of roasted vegetables like potatoes, carrots, and Brussels sprouts.',
      meal: 'filterDiv breakfast',
    },
    {
      id: 'sp4',
      src: `${Dish4}`,
      title: 'Spinach and feta',
      price: 15,
      pText:
        'Chicken breasts stuffed with a mixture of spinach, feta cheese, and herbs, then baked until tender and juicy.',
      meal: 'filterDiv lunch',
    },
    {
      id: 'sp5',
      src: `${Dish5}`,
      title: 'Vegetable fry',
      price: 22,
      pText:
        'A colorful mix of fresh vegetables like bell peppers, broccoli, carrots, and snap peas, stir-fried in a flavorful sauce and served over rice or noodles.',
      meal: 'filterDiv lunch',
    },
    {
      id: 'sp6',
      src: `${Dish6}`,
      title: 'Shrimp scampi',
      price: 27,
      pText:
        'Succulent shrimp cooked in a garlic butter sauce with white wine and lemon juice, served over pasta or with crusty bread for dipping.',
      meal: 'filterDiv lunch',
    },
    {
      id: 'sp7',
      src: `${Dish7}`,
      title: 'Mushroom risotto',
      price: 18,
      pText:
        'Creamy risotto cooked with Arborio rice, mushrooms, onions, garlic, and Parmesan cheese. It makes for a comforting and satisfying dinner.',
      meal: 'filterDiv dinner',
    },
    {
      id: 'sp8',
      src: `${Dish8}`,
      title: 'Beef & broccoli ',
      price: 24,
      pText:
        'Tender strips of beef stir-fried with broccoli florets, cashews, garlic, ginger, and a savory sauce. Serve it over rice or noodles.',
      meal: 'filterDiv dinner',
    },
    {
      id: 'sp9',
      src: `${Dish9}`,
      title: 'Chicken tikka',
      price: 11,
      pText:
        'Marinated and grilled chicken pieces simmered in a creamy tomato-based sauce with spices like garam masala, cumin, and turmeric. Serve it over rice or with naan bread.',
      meal: 'filterDiv dinner',
    },
    {
      id: 'sp10',
      src: `${Dish10}`,
      title: 'Glazed salmon',
      price: 38,
      pText:
        'Salmon fillets brushed with a sweet and tangy honey glaze, then baked alongside roasted sweet potatoes for a balanced and flavorful meal.',
      meal: 'filterDiv dinner',
    },
    {
      id: 'sp11',
      src: `${Dish11}`,
      title: 'Coffee',
      price: 5,
      pText:
        'Awaken your senses with our expertly brewed coffee, made from the finest beans sourced from around the world. We have the perfect cup of coffee to satisfy your cravings',
      meal: 'filterDiv drinks',
    },
    {
      id: 'sp12',
      src: `${Dish12}`,
      title: 'Tea',
      price: 3,
      pText:
        ' Immerse yourself in a world of aromatic bliss with our selection of premium teas. Each cup offers a moment of tranquility and rejuvenation.',
      meal: 'filterDiv drinks',
    },
    {
      id: 'sp13',
      src: `${Dish13}`,
      title: 'Juice',
      price: 15,
      pText:
        'Quench your thirst with our refreshing selection of freshly squeezed juices. Our juices are made from the freshest fruits to provide a revitalizing and invigorating experience.',
      meal: 'filterDiv drinks',
    },
    {
      id: 'sp14',
      src: `${Dish14}`,
      title: 'Cappuccino',
      price: 10,
      pText:
        'Indulge in the classic Italian favorite, a harmonious blend of rich espresso, velvety steamed milk, and a delicate layer of frothy foam. Savor the perfect balance of flavors in every sip.',
      meal: 'filterDiv drinks',
    },
  ])

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    filterSelection(filter)
  }, [filter])

  const filterSelection = (category) => {
    const elements = document.getElementsByClassName('filterDiv')
    if (category === 'all') {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('show_specials')
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('show_specials')
        if (elements[i].className.indexOf(category) > -1) {
          elements[i].classList.add('show_specials')
        }
      }
    }
  }

  const handleButtonClick = (category) => {
    setFilter(category)
    const current = document.getElementsByClassName('active')
    current[0].classList.remove('active')
    this.target.classList.add('active card_shadow')
  }

  return (
    <section className='wrapper_specials_section'>
      <div className='title_center pt-1 '>
        <h1>Our specials</h1>
      </div>

      <div id='myBtnContainer'>
        <button
          className={`btn_specials ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleButtonClick('all')}>
          Show all
        </button>
        <button
          className={`btn_specials ${filter === 'breakfast' ? 'active' : ''}`}
          onClick={() => handleButtonClick('breakfast')}>
          Breakfast
        </button>
        <button
          className={`btn_specials ${filter === 'lunch' ? 'active' : ''}`}
          onClick={() => handleButtonClick('lunch')}>
          Lunch
        </button>
        <button
          className={`btn_specials ${filter === 'dinner' ? 'active' : ''}`}
          onClick={() => handleButtonClick('dinner')}>
          Dinner
        </button>
        <button
          className={`btn_specials ${filter === 'drinks' ? 'active' : ''}`}
          onClick={() => handleButtonClick('drinks')}>
          Drinks
        </button>
      </div>

      <div className='container_specials'>
        {/* single card */}
        {cardSpecials.map((card) => (
          <CardSpecials card={card} key={card.id} />
        ))}
        {/* ******************* */}
      </div>
    </section>
  )
}

export default Specials
