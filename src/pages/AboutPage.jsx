import { useEffect } from "react"
import MainContainerAbout from "../components/about/MainContainerAbout"
import Nav from "../components/general/Nav"
import Footer from "../components/general/Footer"
import ArrowPhantom from "../hooks/ArrowPhantom"


function AboutPage() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
      <Nav />
      <main className='main pt-5'>
        <MainContainerAbout className='flashIn' />
      </main>
      <Footer />
      <ArrowPhantom />
    </>
  )
}

export default AboutPage