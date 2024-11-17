import React from 'react'

export default function UpgradePlan() {
  return (
    <div className='upgrade-plan'>
        <p>Upgrade your plan</p>
        <button>
            <span>Go to <b>PRO</b></span>
            <span>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_66_7987)">
                <path d="M6.85718 9.16659L11.1429 4.99992L6.85718 0.833252" stroke="#369FFF" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.857178 9.16659L5.14289 4.99992L0.857178 0.833252" stroke="#369FFF" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_66_7987">
                <rect width="12" height="10" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </span>
        </button>
    </div>
  )
}
