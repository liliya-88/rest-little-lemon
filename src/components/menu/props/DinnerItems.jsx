/* eslint-disable react/prop-types */


const DinnerItems = (props) => {
  return (
    <tr className='tr_2'>
      <td className='td_dish'>
        {props.dinnerItem.dish} <br />
        <small className='ts_small'>{props.dinnerItem.description}</small>
      </td>
      <td className='td_img '>
        <img
          src={props.dinnerItem.src}
          alt={props.dinnerItem.dish}
          className='td_img '
        />
      </td>
      <td className='td_price'>{props.dinnerItem.price}</td>
    </tr>
  )
}

export default DinnerItems