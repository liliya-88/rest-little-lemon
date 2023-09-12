/* eslint-disable react/prop-types */
const CardMenu = (props) => {
  return (
    <tr className='tr_2'>
      <td className='td_dish'>
        {props.menuItem.dish} <br />
        <small className='ts_small'>{props.menuItem.description}</small>
      </td>
      <td className='td_img '>
        <img
          src={props.menuItem.src}
          alt={props.menuItem.dish}
          className='td_img '
        />
      </td>
      <td className='td_price'>{props.menuItem.price}</td>
    </tr>
  )
}

export default CardMenu
