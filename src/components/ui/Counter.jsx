import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)} className='btn'>
        Increment
      </button>
      <button onClick={() => setCount((prev) => prev - 1)} className='btn'>
        Decrement
      </button>
    </div>
  )
}

export default Counter
