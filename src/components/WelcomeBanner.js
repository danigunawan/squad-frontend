import React from 'react'

const WelcomeBanner = (props) => {
  return (
    <div className='hero-image'>
      <div className='hero-text'>
        <h1>Squad</h1>
        <p>Team Up</p>
        <button onClick={props.signupClick}>Sign Up</button>
        <button onClick={props.showLoginFormClick}>Log In</button>
      </div>
    </div>
  )
}

export default WelcomeBanner