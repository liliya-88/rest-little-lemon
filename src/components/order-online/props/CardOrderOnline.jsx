/* eslint-disable react/prop-types */
const CardOrderOnline = (props) => {
  /* className={`${props.card.meal}`} */
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
        <p className='p_order_online'>{props.card.pText}</p>
      </div>
    </div>
  )
}

export default CardOrderOnline
