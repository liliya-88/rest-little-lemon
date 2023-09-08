import { useState, useRef } from 'react'
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
import { Link } from 'react-router-dom'

function Menu() {
  const [filter, setFilter] = useState('')
  const [tableData, setTableData] = useState([
    {
      id: ' 1m',
      meal: 'breakfast',
      src: `${Dish1}`,
      title: 'Chicken Parmesan',
      price: '$12',
      pText:
        'Breaded chicken cutlets topped with marinara sauce, melted cheese, and served over spaghetti or with a side of garlic bread.',
    },
    {
      id: '2m',
      src: `${Dish2}`,
      meal: 'breakfast',
      title: 'Baked salmon',
      price: '$18',
      pText:
        'Fresh salmon fillets seasoned with lemon, herbs, and olive oil, then baked until tender and flaky. Serve it with a side of steamed asparagus or a green salad.',
    },
    {
      id: '3m',
      src: `${Dish3}`,
      meal: 'breakfast',
      title: 'Grilled steak',
      price: '$25',
      pText:
        'A juicy steak cooked to perfection, served with a side of roasted vegetables like potatoes, carrots, and Brussels sprouts.',
    },
    {
      id: '4m',
      src: `${Dish4}`,
      meal: 'lunch',

      title: 'Spinach and feta',
      price: '$15',
      pText:
        'Chicken breasts stuffed with a mixture of spinach, feta cheese, and herbs, then baked until tender and juicy.',
    },
    {
      id: '5m',
      src: `${Dish5}`,
      meal: 'lunch',
      title: 'Vegetable fry',
      price: '$22',
      pText:
        'A colorful mix of fresh vegetables like bell peppers, broccoli, carrots, and snap peas, stir-fried in a flavorful sauce and served over rice or noodles.',
    },

    {
      id: '6m',
      src: `${Dish6}`,
      meal: 'lunch',
      title: 'Shrimp scampi',
      price: '$27',
      pText:
        'Succulent shrimp cooked in a garlic butter sauce with white wine and lemon juice, served over pasta or with crusty bread for dipping.',
    },
    {
      id: '7m',
      src: `${Dish7}`,
      meal: 'dinner',
      title: 'Mushroom risotto',
      price: '$18',
      pText:
        'Creamy risotto cooked with Arborio rice, mushrooms, onions, garlic, and Parmesan cheese. It makes for a comforting and satisfying dinner.',
    },
    {
      id: '8m',
      src: `${Dish8}`,
      meal: 'dinner',
      title: 'Beef & broccoli ',
      price: '$24',
      pText:
        'Tender strips of beef stir-fried with broccoli florets, cashews, garlic, ginger, and a savory sauce. Serve it over rice or noodles.',
    },
    {
      id: '9m',
      src: `${Dish9}`,
      meal: 'dinner',
      title: 'Chicken tikka',
      price: '$11',
      pText:
        'Marinated and grilled chicken pieces simmered in a creamy tomato-based sauce with spices like garam masala, cumin, and turmeric. Serve it over rice or with naan bread.',
    },
    {
      id: '10m',
      src: `${Dish10}`,
      meal: 'dinner',
      title: 'Glazed salmon',
      price: '$38',
      pText:
        'Salmon fillets brushed with a sweet and tangy honey glaze, then baked alongside roasted sweet potatoes for a balanced and flavorful meal.',
    },
  ])

  const inputRef = useRef(null)

  const handleInputChange = (event) => {
    const value = event.target.value.toUpperCase()
    setFilter(value)
    if (value === '') {
      resetSearch()
    }
  }

  const filterTable = () => {
    const filteredData = tableData.filter((row) => {
      const txtValue = row.meal
      return txtValue.toUpperCase().indexOf(filter) > -1
    })
    setTableData(filteredData)
  }
  const filterTable2 = () => {
    const filteredData = tableData.filter((row) => {
      const txtValue = row.title
      return txtValue.toUpperCase().indexOf(filter) > -1
    })
    setTableData(filteredData)
  }
  const filterTable3 = () => {
    const filteredData = tableData.filter((row) => {
      const txtValue = row.price
      return txtValue.toUpperCase().indexOf(filter) > -1
    })
    setTableData(filteredData)
  }

  const resetSearch = () => {
    setFilter('')
    setTableData([
      {
        id: ' 1m',
        meal: 'breakfast',
        src: `${Dish1}`,
        title: 'Chicken Parmesan',
        price: '$12',
        pText:
          'Breaded chicken cutlets topped with marinara sauce, melted cheese, and served over spaghetti or with a side of garlic bread.',
      },
      {
        id: '2m',
        src: `${Dish2}`,
        meal: 'breakfast',
        title: 'Baked salmon',
        price: '$18',
        pText:
          'Fresh salmon fillets seasoned with lemon, herbs, and olive oil, then baked until tender and flaky. Serve it with a side of steamed asparagus or a green salad.',
      },
      {
        id: '3m',
        src: `${Dish3}`,
        meal: 'breakfast',
        title: 'Grilled steak',
        price: '$25',
        pText:
          'A juicy steak cooked to perfection, served with a side of roasted vegetables like potatoes, carrots, and Brussels sprouts.',
      },
      {
        id: '4m',
        src: `${Dish4}`,
        meal: 'lunch',

        title: 'Spinach and feta',
        price: '$15',
        pText:
          'Chicken breasts stuffed with a mixture of spinach, feta cheese, and herbs, then baked until tender and juicy.',
      },
      {
        id: '5m',
        src: `${Dish5}`,
        meal: 'lunch',
        title: 'Vegetable fry',
        price: '$22',
        pText:
          'A colorful mix of fresh vegetables like bell peppers, broccoli, carrots, and snap peas, stir-fried in a flavorful sauce and served over rice or noodles.',
      },

      {
        id: '6m',
        src: `${Dish6}`,
        meal: 'lunch',
        title: 'Shrimp scampi',
        price: '$27',
        pText:
          'Succulent shrimp cooked in a garlic butter sauce with white wine and lemon juice, served over pasta or with crusty bread for dipping.',
      },
      {
        id: '7m',
        src: `${Dish7}`,
        meal: 'dinner',
        title: 'Mushroom risotto',
        price: '$18',
        pText:
          'Creamy risotto cooked with Arborio rice, mushrooms, onions, garlic, and Parmesan cheese. It makes for a comforting and satisfying dinner.',
      },
      {
        id: '8m',
        src: `${Dish8}`,
        meal: 'dinner',
        title: 'Beef & broccoli ',
        price: '$24',
        pText:
          'Tender strips of beef stir-fried with broccoli florets, cashews, garlic, ginger, and a savory sauce. Serve it over rice or noodles.',
      },
      {
        id: '9m',
        src: `${Dish9}`,
        meal: 'dinner',
        title: 'Chicken tikka',
        price: '$11',
        pText:
          'Marinated and grilled chicken pieces simmered in a creamy tomato-based sauce with spices like garam masala, cumin, and turmeric. Serve it over rice or with naan bread.',
      },
      {
        id: '10m',
        src: `${Dish10}`,
        meal: 'dinner',
        title: 'Glazed salmon',
        price: '$38',
        pText:
          'Salmon fillets brushed with a sweet and tangy honey glaze, then baked alongside roasted sweet potatoes for a balanced and flavorful meal.',
      },
    ])
  }

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <div className='title_center'>
        <h1 className='yellow'>menu</h1>
      </div>

      <div className='table_menu'>
        <input
          type='text'
          id='myInput'
          onChange={handleInputChange}
          placeholder='Search for names..'
          ref={inputRef}
        />
        <div className='btn_menu_container'>
          <button onClick={filterTable} className='btn_menu'>
            Filter by meal
          </button>
          <button onClick={filterTable2} className='btn_menu'>
            Filter by title
          </button>
          <button onClick={filterTable3} className='btn_menu'>
            Filter by price
          </button>
          <button onClick={resetSearch} className='btn_menu'>
            Reset
          </button>
          <button onClick={focusInput} className='btn_menu'>
            Focus Input
          </button>
        </div>
        <table id='myTable'>
          <thead>
            <tr className='header'>
              <th style={{ width: '25%' }}>Meal</th>
              <th style={{ width: '55%' }}>Title</th>
              <th style={{ width: '20%' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.meal}</td>
                <td style={{ textAlign: 'center', color: '#F4CE14' }}>
                  {row.title}{' '}
                  <div className='flex_menu'>
                    <img src={row.src} className='img_menu' alt={row.title} />
                    <small style={{ color: '#EDEFEE' }}>{row.pText}</small>
                  </div>
                </td>
                <td style={{ color: '#FBDABB', padding: '0.2rem' }}>
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section>
        <div className='title_center'>
          <h4 className='yellow h4_menu'>
            For more information you can contact us freely.
          </h4>
        </div>
        <div className='btns pb-4'>
          <Link to={'/reservations'}>
            <button className='a_link_button center btn_bg'>
              Reserve a delivery
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Menu
