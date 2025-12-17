
import { useState, useEffect } from 'react'

function CounterApp() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  useEffect(() => {
    if (Math.abs(count) % 2 == 1) {
      setColor('lime')
    } else {
      setColor('#ff0000ff')
    }
  }, [count]);

  const incrementCount = () => {
    setCount(count => count + 1)
  }

  const decrementCount = () => {
    setCount(count => count - 1)
  }

  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <div className="wrapper">
            <h1 className='title'>Counter App</h1>
            <span style={{ color }} className='count'>{count}</span>
            <div className="buttons">
              <button className="decrement-btn" onClick={decrementCount}>Decrement -</button>
              <button className="increment-btn" onClick={incrementCount}>Increment +</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CounterApp