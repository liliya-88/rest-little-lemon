import { useEffect } from 'react'
import Footer from '../components/general/Footer'
import MainContainerMenu from '../components/menu/MainContainerMenu'
import ArrowPhantom from '../hooks/ArrowPhantom'
import Nav from '../components/general/Nav'

function Menupage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Nav />
      <main className='main pt-6 flashIn'>
        <MainContainerMenu />
      </main>
      <ArrowPhantom />
      <Footer />
    </>
  )
}

export default Menupage
