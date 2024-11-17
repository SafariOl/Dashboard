import React from 'react'
import logo from '../assets/images/trump.jpg'

export default function User() {
  return (
    <div className='user'>
        <div className='user-content'>
          <div className="logo">
              <img src={logo} alt="logo-img" />
          </div>
          <div className="user-info">
              <p>Donald Trump</p>
              <span>Basic Plan</span>
          </div>
        </div>
        <button>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
  )
}
