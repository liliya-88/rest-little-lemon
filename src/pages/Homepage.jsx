import Footer from '../components/general/Footer'
import Nav from '../components/general/Nav'
import MainContainer from '../components/homepage/MainContainer'
import ArrowPhantom from '../hooks/ArrowPhantom'

function Homepage() {
  return (
    <>
      <Nav />
      <main className='main pt-6 flashIn'>
        <MainContainer />
      </main>
      <ArrowPhantom />
      <Footer />
    </>
  )
}

export default Homepage
