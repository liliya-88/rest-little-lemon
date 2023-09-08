import { useEffect } from 'react'
import Footer from '../components/general/Footer'
import ArrowPhantom from '../hooks/ArrowPhantom'
import Nav from '../components/general/Nav'
import MainContainerSpecials from '../components/specials/MainContainerSpecials'

function SpecialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <>
        <Nav />
        <main className='main pt-6 flashIn'>
          <MainContainerSpecials />
        </main>
        <ArrowPhantom />
        <Footer />
      </>
    </>
  )
}

export default SpecialsPage
