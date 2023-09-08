/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img
          // eslint-disable-next-line react/prop-types
          src={props.card.src}
          loading='lazy'
          className='responsive'
          alt={props.card.title}
        />
        <div className='middle'>
          <Link
            to={'/specials'}
            className='a_link'
            onClick={() => window.scrollTo(0, 0)}>
            <div className='text btn'>{props.card.btnText}</div>
          </Link>
        </div>
      </div>
      <div className='middle'>
        <div className='text'>{props.card.title}</div>
      </div>
      <div className='card-inner'>
        <h3 className='text text-title'>{props.card.title}<i className='i_price'>{ props.card.price}</i></h3>
        <p className='paragraph truncate'>{props.card.pText}</p>
        <Link to={'/specials'} className='a_link_button2'>
          Order a delivery 🛵
        </Link>
      </div>
    </div>
  )
}

export default Card
