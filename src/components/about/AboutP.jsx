import Image1 from '../../assets/about/restaurant-manager.jpg'

import Image3 from '../../assets/about/interior-of-the-restaurant.jpg'

function AboutP() {
  return (
    <>
      <div className='title_center' id='about'>
        <h1 className='h1_about'>About us</h1>
      </div>
      <section className='section-center grid-2 flashIn'>
        {/* left part  */}
        <article className='part title_center'>
          <div className='title_left'>
            <h2 className='h1_about yellow'>Little Lemon </h2>
          </div>
          <p>
            <small className='opacity-50'>🍋</small> We are a family owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. <br />
            <br />
            <small className='opacity-50'>🍋</small> We are a family owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist.
            <br />
            <br />
            <small className='opacity-50'>🍋</small> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cumque, praesentium! Eum impedit
            dolores facilis.
          </p>
        </article>
        {/* ------------- */}
        {/* right part */}
        <article className='part'>
          <div className='images_container'>
            <div className='image_container one'>
              <img src={Image1} alt=' restaurant manager' className='img' />
            </div>
            <div className='image_container two'>
              <img
                src={Image3}
                alt=' interior of the restaurant '
                className='img'
              />
            </div>
          </div>
        </article>
        {/* ---------------- */}
      </section>
    </>
  )
}

export default AboutP
