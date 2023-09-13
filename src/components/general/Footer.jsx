import { Link } from 'react-router-dom'
import SocialMediaIcons from './SocialMediaIcons'
import Logo from '../../assets/svg-logo.svg'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className='footer' id='contact'>
      <div className='wrapper'>
        <div>
          <Link
            to={'/'}
            smooth={true}
            duration={500}
            className='a_logo'
            onClick={() => {
              window.scrollTo(0, 0)
            }}>
            <img src={Logo} alt='logo' className='a_link logo' />
            &nbsp;Little Lemon
          </Link>
        </div>
        <div>
          <ul>
            <Link to={'/menu'} onClick={() => window.scrollTo(0, 0)}>
              <li className='a_link_footer'>menu</li>
            </Link>
            <Link to='/about' smooth={true} duration={500}>
              <li
                className='a_link_footer'
                onClick={() => {
                  window.scrollTo(0, 0)
                }}>
                about
              </li>
            </Link>
            <Link to={'/reservations'} onClick={() => window.scrollTo(0, 0)}>
              <li className='a_link_footer'>reservations</li>
            </Link>
            <Link to={'/orderOnline'} onClick={() => window.scrollTo(0, 0)}>
              <li className='a_link_footer'>order online</li>
            </Link>
            <Link to={'/login'} onClick={() => window.scrollTo(0, 0)}>
              <li className='a_link_footer'>login</li>
            </Link>
          </ul>
        </div>
        <div>
          <address>
            <em>Address:</em>
            <br />
            123 Main Street
            <br />
            City, State 12345
            <br />
            <a
              href='mailto:contact@little-lemon.com'
              target='_blank'
              rel='noreferrer'
              className='a_link_footer'>
              <small>Email: contact@little-lemon.com</small>
            </a>
            <br />
            <a
              href='tel:+19285696397'
              className='a_link_footer'
              target='_blank'
              rel='noreferrer'>
              Phone: +1-123-456-7890
            </a>
            <br />
          </address>
        </div>
        <SocialMediaIcons />
      </div>
      <div className='section-center copyright'>
        <small>
          <p className='copyright'>
            © Little Lemon <span id='date'> {date} </span>All rights Reserved.
          </p>
        </small>
      </div>
    </footer>
  )
}

export default Footer
