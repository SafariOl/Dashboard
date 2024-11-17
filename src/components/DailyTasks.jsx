import React from 'react'
import pana from '../assets/images/pana.png'

export default function DailyTasks() {

  return (
    <div className='daily-tasks'>
        <div>
            <h3 className='title'>Your daily tasks</h3>
            <p>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 0.75C1.16421 0.75 1.5 1.08579 1.5 1.5V2.03942L3.33819 1.57987C5.59613 1.01539 7.98152 1.27724 10.0632 2.3181L10.171 2.37196C11.8972 3.23507 13.8714 3.46567 15.75 3.02363L18.8596 2.29196C19.0965 2.23622 19.3458 2.29888 19.5281 2.46005C19.7105 2.62121 19.8033 2.86083 19.7771 3.10278C19.594 4.79313 19.5 6.51046 19.5 8.25C19.5 10.004 19.5955 11.7355 19.7817 13.4395C19.8228 13.8161 19.5766 14.1642 19.2079 14.251L16.0936 14.9837C13.8734 15.5062 11.5402 15.2336 9.50015 14.2136L9.39243 14.1597C7.63097 13.279 5.61256 13.0574 3.70199 13.5351L1.5 14.0856V19.5C1.5 19.9142 1.16421 20.25 0.75 20.25C0.335786 20.25 0 19.9142 0 19.5V1.5C0 1.08579 0.335786 0.75 0.75 0.75Z" fill="#452D89"/>
            </svg>
            <span>Watch Neural Networks Lecture</span>
            </p>
            <p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM11 10V5H9V12H15V10H11Z" fill="#452D89"/>
                </svg>
                <span>Today 18:00</span>
            </p>
        </div>
        <div className='show-tasks'>
            <img src={pana} alt="img" />
            <button>
                <span>Watch</span>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.125 1.375L14.75 7M14.75 7L9.125 12.625M14.75 7H1.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
  )
}
