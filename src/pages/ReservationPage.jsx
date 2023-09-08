import { useEffect } from 'react'
import Footer from '../components/general/Footer'
import NavReservations from '../components/reservations/NavReservations'
import ArrowPhantom from '../hooks/ArrowPhantom'
import MainContainerReservations from '../components/reservations/MainContainerReservations'

function ReservationPage() {
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])
  return (
    <>
      <NavReservations />
      <main className='main pt-6 flashIn'>
        <MainContainerReservations />
      </main>
      <ArrowPhantom />
      <Footer />
    </>
  )
}

export default ReservationPage