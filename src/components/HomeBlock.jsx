import React from 'react'

export default function HomeBlock({bgColor, title, options=true, children}) {
  return (
    <div className='home-block' style={{background: bgColor}}>
        <div className="home-block__header">
            <h3 className="title">{title}</h3>
            {options &&
              <button>
                  <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_66_8456)">
                      <path d="M2 11C3.10457 11 4 10.1046 4 9C4 7.89543 3.10457 7 2 7C0.89543 7 0 7.89543 0 9C0 10.1046 0.89543 11 2 11Z" fill="#FAA353"/>
                      <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#FAA353"/>
                      <path d="M2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18Z" fill="#FAA353"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_66_8456">
                      <rect width="4" height="18" fill="white"/>
                      </clipPath>
                      </defs>
                  </svg>
              </button>
            }
        </div>
        {children}
    </div>
  )
}
