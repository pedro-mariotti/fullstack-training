import { useState } from 'react'
import buttonArrow from './assets/images/icon-arrow.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <main>
        <form action="">
          <div className='text-inputs-container'>
            <label>Day <input type="text" id='day-input' /></label>
            <label>Month <input type="text" id='month-input' /></label>
            <label>Year <input type="text" id='year-input' /></label>
          </div>
          <button type="submit" value="" >
            <img src={buttonArrow} alt="" />
          </button>
        </form>
        <div className='calculator-output'>
          <p><span>--</span> years</p>
          <p><span>--</span> months</p>
          <p><span>--</span> days</p>
        </div>
      </main>
      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </body>
    </>
  )
}

export default App
