// import About from '../about/About'
import Testimonials from './Testimonials'
import About from './About'
import Hero from './Hero'

const MainContainer = () => {
  return (
    <>
      <div className='main_container'>
        <Hero />
      </div>
      <div className='main_container-testimonials'>
        <Testimonials/>
      </div>
       <div className='main_container-about'>
       <About/>
      </div>
    </>
  )
}

export default MainContainer
