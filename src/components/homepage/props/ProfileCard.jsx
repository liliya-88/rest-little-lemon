/* eslint-disable react/prop-types */
const ProfileCard = (props) => {

  return (
    <div>
      <figure>
        <p className='figcaption'>{props.card.name}</p>
        <img
          src={props.card.src}
          alt='${props.card.name}'
          className='img img_profile'
        />
        <span className='span_profession'>
          {props.card.profession}&nbsp;&nbsp;
        </span>
        <figcaption>
          <strong className='star'>⭐⭐⭐⭐⭐</strong>
          <br />
          <q>{props.card.description}</q>{' '}
        </figcaption>
      </figure>
    </div>
  )
}

export default ProfileCard
