/* eslint-disable react/prop-types */
const LunchItems = (props) => {
  return (
    <tr className='tr_2'>
      <td className='td_dish'>
        {props.lunchItem.dish} <br />
        <small className='ts_small'>{props.lunchItem.description}</small>
      </td>
      <td className='td_img '>
        <img
          src={props.lunchItem.src}
          alt={props.lunchItem.dish}
          className='td_img '
        />
      </td>
      <td className='td_price'>{props.lunchItem.price}</td>
    </tr>
  )
}

export default LunchItems
