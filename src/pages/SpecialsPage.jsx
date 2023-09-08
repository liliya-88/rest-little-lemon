import { useEffect } from 'react'
import Footer from '../components/general/Footer'
import ArrowPhantom from '../hooks/ArrowPhantom'
import NavSpecials from '../components/specials/NavSpecials'
import MainContainerSpecials from '../components/specials/MainContainerSpecials'

function SpecialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <>
        <NavSpecials />
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
