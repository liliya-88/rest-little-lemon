import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'

const SocialMediaIcons = () => {
  return (
    <div className='icons_container'>
      <a
        className='a_social_icon'
        href='https://www.facebook.com'
        title='facebook'
        target='_blank'
        rel='noreferrer'>
        <img src={Facebook} alt='facebook icon' className='icon' />
      </a>
      <a
        className='a_social_icon'
        href='https://www.instagram.com'
        target='_blank'
        title='instagram'
        rel='noreferrer'>
        <img src={Instagram} alt='instagram icon' className='icon' />
      </a>
      <a
        className='a_social_icon'
        href='https://www.twitter.com'
        target='_blank'
        title='twitter'
        rel='noreferrer'>
        <img src={Twitter} alt='twitter icon' className='icon' />
      </a>
    </div>
  )
}

export default SocialMediaIcons
