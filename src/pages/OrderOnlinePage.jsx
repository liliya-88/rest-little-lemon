import { useEffect } from 'react'
import Footer from '../components/general/Footer'

import NavOrderOnline from '../components/order-online/NavOrderOnline'
import ArrowPhantom from '../hooks/ArrowPhantom'
import MainContainerOrderOnline from '../components/order-online/MainContainerOrderOnline'

function OrderOnlinePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <NavOrderOnline />
      <main className='main pt-6 flashIn'>
        <MainContainerOrderOnline />
      </main>
      <ArrowPhantom />
      <Footer />
    </>
  )
}

export default OrderOnlinePage