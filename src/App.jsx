import { useState } from 'react'
import { validateEmail } from './utils/regex'
import './App.scss'
import imgDesktop from './assets/images/illustration-sign-up-desktop.svg'
import imgMobile from './assets/images/illustration-sign-up-mobile.svg'
import iconList from './assets/images/icon-list.svg'
import icoSuccess from './assets/images/icon-success.svg'

function App() {
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(false)
  const [send, setSend] = useState(false)
  const handleValidation = (e) => {
    let emailValue = e.target.value
    if (
      emailValue != '' &&
      validateEmail(emailValue)
    ) {
      setEmail(emailValue)
      setValid(true)
    } else {
      setValid(false)
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    setEmail('')
    setValid(false)
    setSend(!send)
  }
  return (
    <div className="main">
      <div className="main__content">
        {
          !send
          ?
          <div className="newsletter">
            <div className="newsletter__content">
              <div className="newsletter__form">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                  <li>
                    <img src={iconList} alt="•" /> Product discovery and building what matters
                  </li>
                  <li>
                    <img src={iconList} alt="•" /> Measuring to ensure updates are a success
                  </li>
                  <li>
                    <img src={iconList} alt="•" /> And much more!
                  </li>
                </ul>
                <form action="" autoComplete='false'>
                  <label id="email">Email address</label>
                  <input 
                    type="text" 
                    placeholder='email@company.com' 
                    id='email' 
                    name='email' 
                    onChange={handleValidation}
                  />
                  <button 
                    type="button"
                    className={(valid ? 'active' : '')}
                    onClick={handleClick}
                  >
                    Suscribe to monthly newsletter
                  </button>
                </form>
              </div>
              <div className="newsletter__picture">
                <picture>
                  <source srcSet={imgDesktop} media='(min-width: 376px)' />
                  <img src={imgMobile} alt="Stay updated!" />
                </picture>
              </div>
            </div>
          </div>
          :
          <div className="alert">
            <div className="alert__content">
              <div className="alert__message">
                <img src={icoSuccess} alt="Success!" />
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
                <button 
                  type="button"
                  onClick={handleClick}
                >
                  Dismiss message
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default App
