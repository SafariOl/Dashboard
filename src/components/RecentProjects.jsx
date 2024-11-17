import React from 'react'
import project_logo from '../assets/images/project.jpg'

export default function RecentProjects() {
  return (
    <div className='recent-projects'>
        <h3>Recent projects</h3>
        <div className='project'>
            <div className="project-logo">
                <img src={project_logo} alt="logo" />
            </div>
            <div className="project-info">
                <h5>First project 20.10.24</h5>
                <p>the use of artificial intelligence in education at school</p>
            </div>
            <a href="#">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.47998 12.48H19.47" stroke="#FFFFFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.4829 6.48779L19.5199 12.4998L13.4829 18.5118" stroke="#FFFFFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        <div className="range">
            <div className="line"></div>
            <span>42%</span>
        </div>
    </div>
  )
}
