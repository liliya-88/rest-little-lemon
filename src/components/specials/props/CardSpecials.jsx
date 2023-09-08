/* eslint-disable react/prop-types */
const CardSpecials = (props) => {
  /* className={props.card.meal} */
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
      </div>
    </div>
  )
}

export default CardSpecials
