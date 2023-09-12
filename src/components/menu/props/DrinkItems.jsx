/* eslint-disable react/prop-types */


const DrinkItems = (props) => {
  return (
    <tr className='tr_2'>
      <td className='td_dish'>
        {props.drinkItem.dish} <br />
        <small className='ts_small'>{props.drinkItem.description}</small>
      </td>
      <td className='td_img '>
        <img
          src={props.drinkItem.src}
          alt={props.drinkItem.dish}
          className='td_img '
        />
      </td>
      <td className='td_price'>{props.drinkItem.price}</td>
    </tr>
  )
}

export default DrinkItems