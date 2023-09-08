import { useEffect, useState } from 'react'
// import Footer from '../components/general/Footer'

import NavLogin from '../components/login/NavLogin'
import Footer from '../components/general/Footer'

function LoginPage() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const showUp = () => {
      setTimeout(() => {}, 1000)
      setShow(false)
    }
    setShow(true)
    return clearTimeout(showUp)
  }, [])
  return (
    <>
      <NavLogin />

      <section className='grid_wrapper_login flashIn'>
        <article
          style={{
            textAlign: 'center',
            display: 'block',
            color: 'inherit',
            paddingTop: '45vh',
            backdropFilter: 'blue(5px)',
            textShadow: '0 0 0.5px black, 0 0 1px red, 0 0 10px yellow',
          }}
          className={show ? 'slide_up shown' : 'slide_up'}>
          <h1>Welcome to the Login Page</h1>
          <h4>The page is under construction till next week</h4>
          <strong>You can contact us by phone:948-973-0224</strong>
        </article>
      </section>
      <Footer />
    </>
  )
}

export default LoginPage
