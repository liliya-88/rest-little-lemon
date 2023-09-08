import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Link as ReactScroll} from 'react-scroll'
import useMediaQuery from '../../hooks/useMediaQuery'
import Logo from '../../assets/svg-logo.svg'

const Nav = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const [activeLink, setActiveLink] = useState(3)
  const Desktop = useMediaQuery('(min-width: 930px)')

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId)
  }

  return (
    <>
      <header className='header' id='home'>
        <nav className='nav' id='top'>
          <div className='nav_to_open'>
            <ReactScroll
              to='contact'
              smooth={true}
              duration={500}
              className={activeLink === 0 ? 'a_logo active' : 'a_logo'}
              onClick={() => {
                setMobileNavActive(false)
                handleLinkClick(1)
                window.scrollTo(0, 0)
              }}>
              <img src={Logo} alt='logo' className='a_link logo' />
              &nbsp;Little Lemon
            </ReactScroll>
            <div
              className={
                !Desktop && mobileNavActive
                  ? 'nav_container show'
                  : 'nav_container'
              }>
              <ul>
                <Link
                  to={'/'}
                  className={activeLink === 1 ? 'a_link odd active' : 'a_link'}
                  onClick={() => {
                    setMobileNavActive(false)
                    handleLinkClick(1)
                    window.scrollTo(0, 0)
                  }}>
                  <li className='odd'>home</li>
                </Link>
                <Link
                  to='/specials'
                  title='know us better'
                  className={activeLink === 2 ? 'a_link odd active' : 'a_link'}
                  onClick={() => {
                    setMobileNavActive(false)
                    handleLinkClick(2)
                  }}>
                  <li className='odd others'>specials</li>
                </Link>
                <Link
                  to={'/menu'}
                  className={activeLink === 3 ? 'a_link odd active' : 'a_link'}
                  id='dropdown_title_link'
                  onClick={() => {
                    setMobileNavActive(false)
                    handleLinkClick(1)
                    window.scrollTo(0, 0)
                  }}>
                  <li className='odd others'>menu </li>
                </Link>
                <Link
                  to={'/reservations'}
                  className={activeLink === 4 ? 'a_link odd active' : 'a_link'}
                  title='reserve a table'
                  onClick={() => {
                    setMobileNavActive(false)
                    handleLinkClick(1)
                    window.scrollTo(0, 0)
                  }}>
                  <li className='odd others'>reservations</li>
                </Link>
                <Link
                  to={'/orderOnline'}
                  className={activeLink === 5 ? 'a_link odd active' : 'a_link'}
                  onClick={() => {
                    setMobileNavActive(false)
                    handleLinkClick(1)
                    window.scrollTo(0, 0)
                  }}>
                  <li className='odd'>order online</li>
                </Link>
                <Link
                  to={'/login'}
                  className={activeLink === 6 ? 'a_link odd active' : 'a_link'}
                  onClick={() => {
                    setMobileNavActive(false)
                    handleLinkClick(1)
                    window.scrollTo(0, 0)
                  }}>
                  <li className='odd'>login</li>
                </Link>
              </ul>
            </div>

            <span
              className='bars_icon'
              onClick={() => setMobileNavActive((prev) => !prev)}>
              <i className='i-bars'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 bars'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                  />
                </svg>
              </i>
            </span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
