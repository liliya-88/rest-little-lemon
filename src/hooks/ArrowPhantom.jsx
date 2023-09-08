
import { Link } from 'react-scroll'

function ArrowPhantom() {
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset
    var arrow = document.querySelector('.arrow-phantom')
    if (scrollTop > 500) {
      arrow.style.opacity = 1
    } else {
      arrow.style.opacity = 0
    }
  })

  return (
    <div>
      <Link to='top'>
        {' '}
        <span className='arrow-phantom '>
          <i className='fas fa-arrow-up'></i>
        </span>
      </Link>
    </div>
  )
}

export default ArrowPhantom
