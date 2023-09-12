/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import CardMenu from './props/CardMenu'
/* images */
import Img1 from '../../assets/menu/pancakes.jpg'
import Img2 from '../../assets/menu/eggs_benedict.jpg'
import Img3 from '../../assets/menu/french_toast.jpg'
import Img4 from '../../assets/menu/breakfast_buritto.jpg'
import Img5 from '../../assets/menu/smoked_salmon_bagel.jpg'
import Img6 from '../../assets/menu/american_breakfast.jpg'
import Img7 from '../../assets/menu/avocado_toast.jpg'
import Img8 from '../../assets/menu/omlette.jpg'
/* lunch */
import Img9 from '../../assets/menu/chicken-caesar-salad.jpg'
import Img10 from '../../assets/menu/margherita-pizza.jpg'
import Img11 from '../../assets/menu/club-sandwich.jpg'
import Img12 from '../../assets/menu/shrimp-pad-thai.jpg'
import Img13 from '../../assets/menu/fish-tacos.jpg'
import Img14 from '../../assets/menu/vegetarian-buddha-bowl.jpg'
import Img15 from '../../assets/menu/beef-stir-fry.jpg'
import Img16 from '../../assets/menu/caprese-panini.jpg'
import LunchItems from './props/LunchItems'
/* Dinner */
import Img17 from '../../assets/menu/lobster-thermidor.jpg'
import Img18 from '../../assets/menu/grilled-salmon.jpg'
import Img19 from '../../assets/menu/chicken-marsala.jpg'
import Img20 from '../../assets/menu/seafood-paella.jpg'
import Img21 from '../../assets/menu/vegetable-curry.jpg'
import Img22 from '../../assets/menu/rack-of-lamb.jpg'
import Img23 from '../../assets/menu/shrimp-scampi.jpg'
import Img24 from '../../assets/menu/eggplant-parmesan.jpg'
import DinnerItems from './props/DinnerItems'
/* Drinks */
import Img25 from '../../assets/menu/margarita.jpg'
import Img26 from '../../assets/menu/mojito.jpg'
import Img27 from '../../assets/menu/piña-colada.jpg'
import Img28 from '../../assets/menu/cosmopolitan.jpg'
import Img29 from '../../assets/menu/cocktail-made-with-whiskey.jpg'
import Img30 from '../../assets/menu/iced-tea.jpg'
import Img31 from '../../assets/menu/espresso-martini.jpg'
import Img32 from '../../assets/menu/fruit-punch.jpg'
import DrinkItems from './props/DrinkItems'
/* --- */
const Menu = () => {
  const [defaultOpen, setDefaultOpen] = useState(true)
  const [open, setOpen] = useState(false)
  const [tabBg, setTabBg] = useState(false)
  const [defaultTabBg, setDefaultTabBg] = useState(true)
  const [clicked, setClicked] = useState(0)
  const [menuItems, setMenuItems] = useState([
    {
      id: 'item-1',
      dish: 'Pancakes ',
      description:
        ' Fluffy pancakes or crispy waffles served with butter and maple syrup are a popular choice for breakfast.',
      src: `${Img1}`,
      price: '$7',
      color: 'type-1',
    },
    {
      id: 'item-2',
      dish: 'Eggs Benedict',
      description:
        ' This dish consists of poached eggs served on an English muffin with Canadian bacon or ham, topped with hollandaise sauce.',
      src: `${Img2}`,
      price: '$9',
      color: 'type-1',
    },
    {
      id: 'item-3',
      dish: 'French Toast',
      description:
        ' Thick slices of bread soaked in a mixture of eggs, milk, and cinnamon, then fried until golden brown and served with syrup or powdered sugar.',
      src: `${Img3}`,
      price: '$14',
      color: 'type-1',
    },
    {
      id: 'item-4',
      dish: 'Breakfast Burrito',
      description:
        ' A tortilla filled with scrambled eggs, cheese, bacon or sausage, and sometimes potatoes or vegetables, served with salsa or sour cream.',
      src: `${Img4}`,
      price: '$6',
      color: 'type-1',
    },
    {
      id: 'item-5',
      dish: 'Smoked Salmon Bagel',
      description:
        '  A toasted bagel topped with cream cheese, smoked salmon, red onions, capers, and sometimes tomatoes.',
      src: `${Img5}`,
      price: '$12',
      color: 'type-1',
    },
    {
      id: 'item-6',
      dish: 'American Breakfast ',
      description:
        '  It includes eggs (cooked to your preference), bacon or sausage, toast or biscuits, and hash browns or home fries.',
      src: `${Img6}`,
      price: '$10',
      color: 'type-1',
    },
    {
      id: 'item-7',
      dish: 'Avocado Toast ',
      description:
        ' Toasted bread topped with mashed avocado, often accompanied by additional toppings like poached eggs, tomatoes, or feta cheese.',
      src: `${Img7}`,
      price: '$22',
      color: 'type-1',
    },
    {
      id: 'item-8',
      dish: 'Omelette ',
      description:
        '  A fluffy egg dish filled with various ingredients such as cheese, vegetables, ham, bacon, or mushrooms.',
      src: `${Img8}`,
      price: '$8',
      color: 'type-1',
    },
  ])
  /* for lunch items */
  const [lunchItems, setLunchItems] = useState([
    {
      id: 'item-9',
      dish: 'Chicken Caesar Salad ',
      description:
        ' Crisp romaine lettuce tossed in creamy Caesar dressing, topped with grilled chicken breast, Parmesan cheese, and crunchy croutons.',
      src: `${Img9}`,
      price: '$7',
      color: 'type-1',
    },
    {
      id: 'item-10',
      dish: 'Margherita Pizza ',
      description:
        ' A classic Italian pizza topped with fresh mozzarella cheese, sliced tomatoes, basil leaves, and a drizzle of olive oil.',
      src: `${Img10}`,
      price: '$9',
      color: 'type-1',
    },
    {
      id: 'item-11',
      dish: 'Club Sandwich',
      description:
        '  Layers of roasted turkey, crispy bacon, lettuce, tomato, and mayonnaise stacked between three slices of toasted bread.',
      src: `${Img11}`,
      price: '$14',
      color: 'type-1',
    },
    {
      id: 'item-12',
      dish: 'Shrimp Pad Thai',
      description:
        ' Stir-fried rice noodles with shrimp, bean sprouts, eggs, tofu, and peanuts in a tangy tamarind sauce.',
      src: `${Img12}`,
      price: '$6',
      color: 'type-1',
    },
    {
      id: 'item-13',
      dish: 'Fish Tacos',
      description:
        '  Soft corn tortillas filled with grilled or battered fish, topped with shredded cabbage, salsa fresca, and a squeeze of lime.',
      src: `${Img13}`,
      price: '$12',
      color: 'type-1',
    },
    {
      id: 'item-14',
      dish: 'Vegetarian Buddha Bowl ',
      description:
        '   A nourishing bowl filled with a variety of roasted or sautéed vegetables, quinoa or brown rice, avocado slices, and a drizzle of tahini dressing.',
      src: `${Img14}`,
      price: '$10',
      color: 'type-1',
    },
    {
      id: 'item-15',
      dish: 'Beef Stir-Fry ',
      description:
        ' Tender strips of beef stir-fried with colorful bell peppers, broccoli florets, carrots, and onions in a savory soy-based sauce, served over steamed rice.',
      src: `${Img15}`,
      price: '$22',
      color: 'type-1',
    },
    {
      id: 'item-16',
      dish: 'Caprese Panini ',
      description:
        ' A grilled panini sandwich filled with fresh mozzarella cheese, sliced tomatoes, basil leaves, and a drizzle of balsamic glaze.',
      src: `${Img16}`,
      price: '$8',
      color: 'type-1',
    },
  ])
  /* for dinner items */
  const [dinnerItems, setDinnerItems] = useState([
    {
      id: 'item-17',
      dish: 'Lobster Thermidor ',
      description:
        ' A classic French dish consisting of lobster meat cooked in a creamy sauce with mushrooms, white wine, and Gruyere cheese, served with a side of rice or pasta.',
      src: `${Img17}`,
      price: '$7',
      color: 'type-1',
    },
    {
      id: 'item-18',
      dish: 'Grilled Salmon ',
      description:
        ' Fresh salmon fillet seasoned with herbs and grilled to perfection, served with a lemon butter sauce and a side of roasted asparagus or wild rice.',
      src: `${Img18}`,
      price: '$9',
      color: 'type-1',
    },
    {
      id: 'item-19',
      dish: 'Chicken Marsala',
      description:
        '  Sautéed chicken breasts in a rich Marsala wine sauce with mushrooms and shallots, served with a side of mashed potatoes or buttered noodles.',
      src: `${Img19}`,
      price: '$14',
      color: 'type-1',
    },
    {
      id: 'item-20',
      dish: 'Seafood Paella',
      description:
        ' A Spanish rice dish cooked with a medley of seafood such as shrimp, mussels, clams, and squid, flavored with saffron and served with crusty bread.',
      src: `${Img20}`,
      price: '$6',
      color: 'type-1',
    },
    {
      id: 'item-21',
      dish: 'Vegetable Curry',
      description:
        '  A flavorful blend of mixed vegetables cooked in a spiced curry sauce, served over steamed basmati rice or with naan bread.',
      src: `${Img21}`,
      price: '$12',
      color: 'type-1',
    },
    {
      id: 'item-22',
      dish: 'Rack of Lamb ',
      description:
        '   Tender lamb chops seasoned with herbs and spices, roasted to perfection and served with a mint jelly sauce, accompanied by roasted potatoes or grilled vegetables.',
      src: `${Img22}`,
      price: '$10',
      color: 'type-1',
    },
    {
      id: 'item-23',
      dish: 'Shrimp Scampi ',
      description:
        ' Succulent shrimp sautéed in garlic butter and white wine sauce, served over linguine pasta or with crusty bread for dipping.',
      src: `${Img23}`,
      price: '$22',
      color: 'type-1',
    },
    {
      id: 'item-24',
      dish: 'Eggplant Parmesan ',
      description:
        ' Layers of breaded and fried eggplant slices smothered in marinara sauce, melted mozzarella cheese, and Parmesan cheese, served with a side of spaghetti or garlic bread.',
      src: `${Img24}`,
      price: '$8',
      color: 'type-1',
    },
  ])
  /* for drink items */
  const [drinkItems, setDrinkItems] = useState([
    {
      id: 'item-25',
      dish: 'Margarita ',
      description:
        ' A classic cocktail made with tequila, lime juice, and orange liqueur, served in a salt-rimmed glass. It can be enjoyed on the rocks or blended with ice for a frozen version.',
      src: `${Img25}`,
      price: '$7',
      color: 'type-1',
    },
    {
      id: 'item-26',
      dish: 'Mojito ',
      description:
        ' A refreshing cocktail made with rum, fresh mint leaves, lime juice, simple syrup, and soda water. Itis typically served over ice and garnished with a sprig of mint',
      src: `${Img26}`,
      price: '$9',
      color: 'type-1',
    },
    {
      id: 'item-27',
      dish: 'Piña Colada',
      description:
        '  A tropical cocktail made with rum, pineapple juice, coconut cream, and crushed ice. It is usually blended until smooth and garnished with a pineapple wedge and cherry.',
      src: `${Img27}`,
      price: '$14',
      color: 'type-1',
    },
    {
      id: 'item-28',
      dish: 'Cosmopolitan',
      description:
        ' A popular vodka-based cocktail made with cranberry juice, orange liqueur, lime juice, and a splash of lemon. It is typically served in a martini glass and garnished with a twist of orange peel.',
      src: `${Img28}`,
      price: '$6',
      color: 'type-1',
    },
    {
      id: 'item-29',
      dish: 'Whiskey cocktail',
      description:
        ' A timeless cocktail made with whiskey or bourbon, sugar, Angostura bitters, and a twist of citrus peel. It is traditionally served in a short glass over ice',
      src: `${Img29}`,
      price: '$12',
      color: 'type-1',
    },
    {
      id: 'item-30',
      dish: 'Iced Tea ',
      description:
        ' A classic and refreshing drink made by steeping tea leaves in hot water and then chilling it over ice. It can be enjoyed plain or flavored with lemon or sweetened with sugar or honey.',
      src: `${Img30}`,
      price: '$22',
      color: 'type-1',
    },
    {
      id: 'item-31',
      dish: 'Espresso Martini ',
      description:
        '  A caffeinated cocktail made with vodka, coffee liqueur, espresso, and a touch of sugar syrup. It is shaken with ice and strained into a martini glass.',
      src: `${Img31}`,
      price: '$10',
      color: 'type-1',
    },
    {
      id: 'item-32',
      dish: 'Fruit Punch ',
      description:
        ' A fruity and sweet mocktail made with a combination of fruit juices, such as orange, pineapple, and cranberry, along with a touch of grenadine syrup. It is typically served over ice and garnished with fruit slices.',
      src: `${Img32}`,
      price: '$8',
      color: 'type-1',
    },
  ])
  /* -------------- */

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleStickyTabs = () => {
      const navbar = document.querySelector('.tabs_container')
      const sticky = navbar.offsetTop

      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
      } else {
        navbar.classList.remove('sticky')
      }
    }

    /* handleStickyTabs() */ // Call it initially to set the sticky class if necessary

    window.addEventListener('scroll', handleStickyTabs)

    return () => {
      window.removeEventListener('scroll', handleStickyTabs)
    }
  }, [])

  function openPage(no, no2, number, yes) {
    setOpen(!no)
    setTabBg(!no2)
    setDefaultOpen(no)
    setClicked(number)
    setDefaultTabBg(no)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className='menu_container'>
        <div className='tabs_container'>
          <button
            className={tabBg && clicked === 1 ? 'tablink open' : 'tablink'}
            onClick={() => {
              openPage(false, false, 1, true)
            }}>
            Breakfast
          </button>
          <button
            className={
              (tabBg && clicked === 2) || defaultTabBg
                ? 'tablink open'
                : 'tablink'
            }
            id='defaultOpen'
            onClick={() => {
              openPage(false, false, 2, true)
            }}>
            Lunch
          </button>
          <button
            className={tabBg && clicked === 3 ? 'tablink open' : 'tablink'}
            onClick={() => {
              openPage(false, false, 3, true)
            }}>
            Dinner
          </button>
          <button
            className={tabBg && clicked === 4 ? 'tablink open' : 'tablink'}
            onClick={() => {
              openPage(false, false, 4, true)
            }}>
            Drinks
          </button>
        </div>

        <div
          id='breakfast'
          className={clicked === 1 ? 'tabcontent default_open' : 'tabcontent'}>
          <div className='table_wrapper'>
            <hr />
            <table className='table_center flashIn'>
              <tr>
                <th className='th'>Dish</th>
                <th className='th'>Photo</th>
                <th className='th'>Price</th>
              </tr>
              {menuItems.map((menuItem) => (
                <CardMenu menuItem={menuItem} key={menuItem.id} />
              ))}
            </table>
          </div>
        </div>
        <div
          id='lunch'
          className={
            defaultOpen || clicked === 2
              ? 'tabcontent default_open'
              : 'tabcontent'
          }>
          <div className='table_wrapper'>
            <hr />
            <table className='table_center flashIn'>
              <tr>
                <th className='th'>Dish</th>
                <th className='th'>Photo</th>
                <th className='th'>Price</th>
              </tr>
              {lunchItems.map((lunchItem) => (
                <LunchItems lunchItem={lunchItem} key={lunchItem.id} />
              ))}
            </table>
          </div>
        </div>
        <div
          id='dinner'
          className={clicked === 3 ? 'tabcontent default_open' : 'tabcontent'}>
          <div className='table_wrapper'>
            <hr />
            <table className='table_center flashIn'>
              <tr className='color3'>
                <th className='th'>Dish</th>
                <th className='th'>Photo</th>
                <th className='th'>Price</th>
              </tr>
              {dinnerItems.map((dinnerItem) => (
                <DinnerItems dinnerItem={dinnerItem} key={dinnerItem.id} />
              ))}
            </table>
          </div>
        </div>
        <div
          id='drinks'
          className={clicked === 4 ? 'tabcontent default_open' : 'tabcontent'}>
          <div className='table_wrapper'>
            <hr />
            <table className='table_center flashIn'>
              <tr className='color4'>
                <th className='th'>Dish</th>
                <th className='th'>Photo</th>
                <th className='th'>Price</th>
              </tr>
              {drinkItems.map((drinkItem) => (
                <DrinkItems drinkItem={drinkItem} key={drinkItem.id} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
