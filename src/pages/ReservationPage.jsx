import { useEffect } from 'react'
import Footer from '../components/general/Footer'
import Nav from '../components/general/Nav'
import ArrowPhantom from '../hooks/ArrowPhantom'
import MainContainerReservations from '../components/reservations/MainContainerReservations'

function ReservationPage() {
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])
  return (
    <>
      <Nav/>
      <main className='main pt-6 flashIn'>
        <MainContainerReservations />
      </main>
      <ArrowPhantom />
      <Footer />
    </>
  )
}

export default ReservationPage