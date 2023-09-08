import { useEffect } from 'react'
import Footer from '../components/general/Footer'

import Nav from '../components/general/Nav'
import ArrowPhantom from '../hooks/ArrowPhantom'

function OrderOnlinePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <Nav />
      <section className='grid_wrapper flashIn'>
        <div className='item1'>Item one</div>
        <div className='item2'>Item two</div>
        <div className='item3'>Item three</div>
        <div className='item4'>Item four</div>
      </section>
      <ArrowPhantom />
      <Footer />
    </>
  )
}

export default OrderOnlinePage