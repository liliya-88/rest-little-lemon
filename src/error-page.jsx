import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <main className='main flashIn' >
        <div id='error-page'>
          <h1 className='title'>Oops!</h1>
          <p className='p_text'>Sorry, an unexpected error has occurred.</p>
          <p className='p-text-red'>
            <i>{error.statusText || error.message}</i>
          </p>
          <a href={'/'} className='a_link'>
            <div className='center'>
              <button className='btn center'>Go Back</button>
            </div>
          </a>
        </div>
      </main>
    </>
  )
}
