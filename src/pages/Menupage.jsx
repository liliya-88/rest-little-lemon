import { useEffect } from 'react'
import Footer from '../components/general/Footer'
import MainContainerMenu from '../components/menu/MainContainerMenu'
import ArrowPhantom from '../hooks/ArrowPhantom'
import NavMenu from '../components/menu/NavMenu'

function Menupage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavMenu />
      <main className='main pt-6 flashIn'>
        <MainContainerMenu />
      </main>
      <ArrowPhantom />
      <Footer />
    </>
  )
}

export default Menupage
