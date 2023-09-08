import Nav from '../components/general/Nav'
import { Outlet, Link } from 'react-router-dom'

const Page = () => {
  return (
    <>
      <Nav />
      <section className='section-center mt'>
        <h1 className='pe-2'>Lorem ipsum dolor sit amet consectetur.</h1>
        <p className='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          repudiandae vitae ullam! Consequatur repellendus voluptatibus illum,
          maxime vel cum cupiditate perferendis cumque, sequi praesentium quia.
          Similique est praesentium et soluta molestias consequuntur error
          laborum enim.
        </p>
        <div>
          <Link to={'/page/:pageId/post'} className='btn'>
            Out Post List
          </Link>
          <b>
            <Outlet />
          </b>
        </div>
      </section>
    </>
  )
}

export default Page
