import React from 'react'
import instructor1 from '../assets/images/instructor1.jpg'
import instructor2 from '../assets/images/instructor2.jpg'
import instructor3 from '../assets/images/instructor3.jpg'

export default function Instructors() {
    const instructors = [
        {
            src: instructor1,
            name: 'Anna May',
            role: 'Data Structures for AI'
        },
        {
            src: instructor2,
            name: "Rohit Singh",
            role: "AI Project Management"
        }, 
        {
            src: instructor3,
            name: "Jennifer Rodrigo",
            role: "AI Tools & Frameworks"
        }
    ]
  return (
    <div>
        {instructors.map(instructor => 
            <div className='instructor'>
                <div className="instructor-logo">
                    <img src={instructor.src} loading='lazy' alt="instructor-logo" />
                </div>
                <div className='instructor-info'>
                    <p>{instructor.name}<br/>{instructor.role}</p>
                    <button className='direct-btn'>
                        <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.3 24C2.3925 24 1.6159 23.7065 0.9702 23.1195C0.3245 22.5325 0.0011 21.826 0 21V3C0 2.175 0.3234 1.469 0.9702 0.882C1.617 0.295 2.3936 0.001 3.3 0H29.7C30.6075 0 31.3846 0.294 32.0314 0.882C32.6782 1.47 33.0011 2.176 33 3V21C33 21.825 32.6771 22.5315 32.0314 23.1195C31.3857 23.7075 30.6086 24.001 29.7 24H3.3ZM12.5479 11.2545C14.9987 12.647 18.0013 12.647 20.4521 11.2545L29.0401 6.37495C29.448 6.14318 29.7 5.71017 29.7 5.24101C29.7 4.24105 28.621 3.61309 27.7515 4.10708L19.7801 8.6363C17.7461 9.792 15.2539 9.79201 13.2199 8.6363L5.24847 4.10708C4.37904 3.61309 3.3 4.24105 3.3 5.24101C3.3 5.71017 3.55199 6.14318 3.9599 6.37495L12.5479 11.2545Z" fill="#452D89"/>
                        </svg>
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}
